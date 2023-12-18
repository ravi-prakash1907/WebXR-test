def resize_image(image_path, target_size=(16, 16)):
    # Open the image and resize it
    image = Image.open(image_path)
    resized_image = image.resize(target_size)

    return resized_image

def encode_image(image_path):
    # # Open the image
    # image = Image.open(image_path)
    # Resize the image to 16x16
    resized_image = resize_image(image_path)

    # Initialize pattern file string
    pattern_file_string = ''

    # Loop over orientations
    for orientation in range(0, -360, -90):
        # Rotate the image
        # rotated_image = image.rotate(orientation)
        rotated_image = resized_image.rotate(orientation)

        # Loop over channels (BGR order)
        for channel_offset in range(2, -1, -1):
            # Loop over pixels
            for y in range(rotated_image.height):
                for x in range(rotated_image.width):
                    # Add separator if not the first pixel in the row
                    if x != 0:
                        pattern_file_string += ' '

                    # Get pixel value
                    pixel_value = rotated_image.getpixel((x, y))[channel_offset]

                    # Append to pattern file string
                    pattern_file_string += f'{pixel_value:03}'

                # Add newline for each row
                pattern_file_string += '\n'

    return pattern_file_string

def save_pattern_file(pattern_file, output_path):
    with open(output_path, 'w') as file:
        file.write(pattern_file)

# calling functions
if __name__ == "__main__":
  image_path = input("Image path for marker creation: ") # 'dog_org.jpg'
  output_path = input("Pattern file name (without extention name of .patt)": ) + ".patt" # 'dog_py.patt'
  pattern_file = encode_image(image_path)
  save_pattern_file(pattern_file, output_path)