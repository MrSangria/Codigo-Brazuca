number = int(input("Type a number: "))
factorial = 1

i = 1
while i <= number:
    factorial = factorial * i
    i += 1

print(f"Factorial of {number} is {factorial}")
