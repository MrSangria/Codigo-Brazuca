import sys

lower = int(input("Enter the lower limit of the range: "))
upper = int(input("Enter the upper limit of the range: "))

total = 0

if lower > upper:
    print(f"{lower} is greater than {upper}. Enter the lower number first.")
    sys.exit()
elif lower == upper:
    print(f"There is no range between {lower} and {upper}.")
    sys.exit()


for i in range(lower, upper + 1):
    if i % 3 == 0 and i % 5 == 0:
        total = total
    elif i % 3 == 0:
        total += i
    elif i % 5 == 0:
        total -= i
    print(total)
    
    

print(f"The total value is: {total}.")