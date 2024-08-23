n = int(input("Enter how many numbers from fibonacci sequence you want to see: "))
fibonacci = 0
a = 0
b = 1

for i in range(n):

    if i <= 1:
        print(i)
    else:
        fibonacci = a + b
        a = b
        b = fibonacci

        print(fibonacci)
