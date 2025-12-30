
import os
from PIL import Image, ImageOps

assets_dir = 'public/assets/services'
files_to_process = [
    'fire-smoke-hero.png',
    'water-damage-restoration-hero.png', 
    'mold-remediation-hero.png',
    'flood-cleanup-hero.png'
]

def remove_background(image_path, tolerance=10):
    try:
        img = Image.open(image_path).convert("RGBA")
        width, height = img.size
        pixels = img.load()
        
        # Sample the top-left pixel as the background color
        bg_r, bg_g, bg_b, bg_a = pixels[0, 0]
        print(f"  Background color detected: ({bg_r}, {bg_g}, {bg_b})")

        count = 0
        
        # Tolerance distance (Manhattan distance for simplicity)
        # 30 is roughly 10 per channel on average, allowing for compression noise
        tol = 45 

        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[x, y]
                
                # Calculate difference from background color
                diff = abs(r - bg_r) + abs(g - bg_g) + abs(b - bg_b)
                
                if diff < tol:
                    pixels[x, y] = (r, g, b, 0)
                    count += 1
        
        print(f"  Processed: {count} pixels made transparent.")
        img.save(image_path, "PNG")
        return True
        
    except Exception as e:
        print(f"  Error processing {image_path}: {e}")
        return False
        
    except Exception as e:
        print(f"  Error processing {image_path}: {e}")
        return False

print("--- Processing Hero Images ---")
for f in files_to_process:
    path = os.path.join(assets_dir, f)
    if os.path.exists(path):
        print(f"Processing {f}...")
        remove_background(path)
    else:
        print(f"File not found: {f}")
