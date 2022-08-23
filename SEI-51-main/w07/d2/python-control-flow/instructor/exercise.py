# floor = "sticky"
# walls = "what walls?"
# if floor == "sticky":
#     print("clean the floor! Its Sticky!")
# else:
#     print("the floor is clean")

# if walls == "sticky":
#     print("Clean the walls! They are sticky!")
# elif walls == "clean":
#     print("the walls really are clean")
# else:
#     print("I dont know what the walls are")

while True:        
    color = input('Enter "green", "yellow", "red": ').lower()
    if color == "quit":
        break
        
    print(f'The user entered {color}')

    if color == "green":
        print("GO!")
    elif color == "yellow":
        print("Slow Down!")
    elif color == "red":
        print("Stop!")
    else:
        print("Bogus!")

# names = ["Tom", "Deborah", "Murray", "Axel"]

# for name in names:
#     print(name)


# num = 0
# while num < 10:
#     num += 1
#     if num == 5:
#         break
#     print(num)
