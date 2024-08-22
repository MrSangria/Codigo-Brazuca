number = int(input("Enter a number to see its mutiplication table: "))

i = 1
while i <= 10:
    result = number * i
    print(f"{number} x {i} = {result}")
    i += 1