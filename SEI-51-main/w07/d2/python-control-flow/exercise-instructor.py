# floor = "sticky"
# walls = "clean"

# if floor == "sticky":
#     print("Clean the floor! It's sticky!")

# if walls == "sticky":
#     print("Clean the walls! They're sticky!")


while True:
    color = input('enter "green", "yellow", "red": ').lower()

    if color == 'quit':
        break

    if color == "green":
        print('GO!')
    elif color == "yellow":
        print('Slow Down!')
    elif color == "red":
        print('Stop!')
    else:
        print('Bogus!')

