numberList = []
number = 0

while number != -1:
    number = int(input("Enter the numbers you wan to add in the list (press -1 to exit): "))
    numberList.append(number)

numberList.remove(-1)

# was not possible to use sum(numberList)

print(f"The lower number is {min(numberList)}.")
print(f"The higher number is {max(numberList)}.")