a = float(input("Enter the first number: "))
b = float(input("Enter the second number: "))
c = float(input("Enter the third number: "))

if a <= b and a <= c:
    if b <= c: 
        print(f"The ascending order is: {a}, {b}, {c}")
    else:
        print(f"The ascending order is: {a}, {c}, {b}")
elif b <= a and b <= c:
    if a <= c:
        print(f"The ascending order is: {b}, {a}, {c}")
    else:
        print(f"The ascending order is: {b}, {c}, {a}")
else:
    if b <= a:
        print(f"The ascending order is: {c}, {b}, {a}")
    else: 
        print(f"The ascending order is: {c}, {a}, {b}")