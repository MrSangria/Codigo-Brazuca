n = int(input("Enter how many numbers you want to sum: "))
sum = 0

for i in range(n+1):
    sum += i

print(f"The sum is {sum}.")