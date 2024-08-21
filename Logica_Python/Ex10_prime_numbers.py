def isPrime(number):
    if number <= 1:
        print(f"The number {number} isn't prime.")
        return
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            print(f"The number {number} isn't prime.")
            return
    print(f"The number {number} is prime.")

yourNumber = int(input("Type your number: "))
isPrime(yourNumber)
