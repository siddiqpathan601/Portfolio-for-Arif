import sys
from PIL import Image

def remove_background(image_path, threshold=25):
    img = Image.open(image_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # Flood fill queue
    queue = []
    visited = set()

    # Start flood fill from all four corners
    corners = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
    for c in corners:
        queue.append(c)
        visited.add(c)

    # BFS traversal to find all connected background pixels
    background_mask = set()
    while queue:
        x, y = queue.pop(0)
        
        r, g, b, a = pixels[x, y]
        # If the pixel color is close to black, classify as background
        if r < threshold and g < threshold and b < threshold:
            background_mask.add((x, y))
            
            # Check 4-way neighbors
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))

    # Convert all identified background pixels to transparent alpha
    for x, y in background_mask:
        pixels[x, y] = (0, 0, 0, 0)

    # Save the processed image back
    img.save(image_path, "PNG")
    print("Background removed successfully using flood fill BFS!")

if __name__ == "__main__":
    remove_background("src/assets/images/3d_developer_character.png")
