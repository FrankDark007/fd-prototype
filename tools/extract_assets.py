
import os
import sys
from PIL import Image, ImageChops

def extract_assets(image_path, output_dir, min_area=1000):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    img = Image.open(image_path).convert("RGBA")
    width, height = img.size
    print(f"Processing {os.path.basename(image_path)} ({width}x{height})...")

    # Get alpha data
    alpha = img.split()[3]
    # Threshold alpha to binary (0 or 255)
    mask = alpha.point(lambda p: 255 if p > 10 else 0)
    
    # We will find connected components in the mask
    # Since we can't use CV2, we'll use a simplified approach:
    # 1. Iterate pixels, find an opaque one.
    # 2. Flood fill mark it as visited and collect bounding box.
    # 3. Repeat.
    
    visited = set()
    components = []
    
    # Optimization: Downscale for detection if image is huge (to speed up python loop), 
    # then map back to original coords.
    # Scale factor 4 reduces 4000x4000 to 1000x1000 (1M pixels), workable.
    scale = 4
    small_mask = mask.resize((width // scale, height // scale), resample=Image.NEAREST)
    s_width, s_height = small_mask.size
    s_data = small_mask.load()
    
    for y in range(s_height):
        for x in range(s_width):
            if s_data[x, y] == 255 and (x, y) not in visited:
                # Found new component
                # Flood fill
                q = [(x, y)]
                visited.add((x, y))
                min_x, max_x = x, x
                min_y, max_y = y, y
                
                while q:
                    cx, cy = q.pop()
                    if cx < min_x: min_x = cx
                    if cx > max_x: max_x = cx
                    if cy < min_y: min_y = cy
                    if cy > max_y: max_y = cy
                    
                    # Check neighbors
                    for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                        nx, ny = cx + dx, cy + dy
                        if 0 <= nx < s_width and 0 <= ny < s_height:
                            if (nx, ny) not in visited and s_data[nx, ny] == 255:
                                visited.add((nx, ny))
                                q.append((nx, ny))
                                
                # Found component bbox (scaled)
                # Map back to original
                orig_bbox = (min_x * scale, min_y * scale, (max_x + 1) * scale, (max_y + 1) * scale)
                
                # Refine bbox on original image? 
                # For now, just add padding and crop.
                w = orig_bbox[2] - orig_bbox[0]
                h = orig_bbox[3] - orig_bbox[1]
                
                if w * h > min_area:
                    components.append(orig_bbox)

    print(f"Found {len(components)} components.")
    
    base_name = os.path.splitext(os.path.basename(image_path))[0]
    
    for i, bbox in enumerate(components):
        # Crop from original
        # Add slight padding
        pad = 10
        crop_box = (
            max(0, bbox[0] - pad),
            max(0, bbox[1] - pad),
            min(width, bbox[2] + pad),
            min(height, bbox[3] + pad)
        )
        
        region = img.crop(crop_box)
        # Trim transparency from the crop to be tight
        bbox_tight = region.getbbox()
        if bbox_tight:
            region = region.crop(bbox_tight)
            
        out_name = f"{base_name}_part_{i+1}.png"
        region.save(os.path.join(output_dir, out_name))
        print(f"Saved {out_name}")

if __name__ == "__main__":
    import sys
    extract_assets(sys.argv[1], sys.argv[2])
