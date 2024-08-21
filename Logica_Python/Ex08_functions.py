def evenOrOdd(number):
  if (number % 2) == 0:
    print(f"The number {number} is even.")
  else:
    print(f"The number {number} is odd.")

yourNumber = int(input("Type a number: "))

evenOrOdd(yourNumber)