a = float(input("Enter the first number: "))
b = float(input("Enter the second number: "))

operator = str(input("Enter the operation you want to apply: (+, -, *, /)"))

if operator == "+":
    print(f"{a} + {b} is {a + b}.")
elif operator == "-":
    print(f"{a} - {b} is {a - b}.")
elif operator == "*":
    print(f"{a} * {b} is {a * b:.2f}.")
elif operator == "/":
    print(f"{a} / {b} is {a / b:.2f}.")