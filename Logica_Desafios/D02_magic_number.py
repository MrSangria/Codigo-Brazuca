import sys

lower = int(input("Enter the lower limit of the range: "))
upper = int(input("Enter the upper limit of the range: "))

if lower > upper:
    print(f"{lower} is greater than {upper}. Enter the lower number first.")
    sys.exit()
elif lower == upper:
    print(f"There is no range between {lower} and {upper}.")
    sys.exit()

def isPrime(number):
    if number <= 1:
        return False
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
    return True

def numberDigitsSum(number):
    total = 0
    for digit in str(number):
        total += int(digit)
    return total  

for number in range(lower, upper + 1):
    if number % 4 == 0 and isPrime(number) and numberDigitsSum(number) % 2 != 0:
        print(f"The magic number is: {number}.")
        sys.exit()

print("No magic number was found.")

