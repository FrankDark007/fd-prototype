
import os
from PIL import Image

assets_dir = 'public/assets/services'
source_dir = 'flood doctor graphics'

files_to_check = [
    'fire-smoke-hero.png',
    'water-damage-restoration-hero.png', 
    'mold-remediation-hero.png',
    'flood-cleanup-hero.png'
]

print("--- Checking Public Assets ---")
for f in files_to_check:
    path = os.path.join(assets_dir, f)
    if os.path.exists(path):
        try:
            img = Image.open(path)
            print(f"File: {f}")
            print(f"  Size: {img.size}")
            print(f"  Mode: {img.mode}")
            print(f"  Format: {img.format}")
            
            # Check for transparency
            if img.mode == 'RGBA':
                extrema = img.getextrema()
                if extrema[3][0] < 255:
                    print("  Status: Has transparent pixels")
                else:
                    print("  Status: RGBA but executionally opaque (alpha channel is full white)")
            elif 'transparency' in img.info:
                 print("  Status: Mapped transparency")
            else:
                 print("  Status: No transparency (Opaque)")
                 
            # Check corner pixel
            corner = img.getpixel((0,0))
            print(f"  Corner Pixel: {corner}")
            
        except Exception as e:
            print(f"Error reading {f}: {e}")
    else:
        print(f"File not found: {f}")

print("\n--- Checking Source Candidates for Water Damage ---")
# Finding potential water damage source files
water_sources = [f for f in os.listdir(source_dir) if 'water' in f.lower() and f.endswith('.png')]
for f in water_sources:
    path = os.path.join(source_dir, f)
    try:
        img = Image.open(path)
        print(f"Source: {f}")
        print(f"  Size: {img.size}")
        print(f"  Mode: {img.mode}")
    except Exception as e:
        pass
