import random

number = random.randrange(1,100)

guess = int(input("Try to guess the number between 1 and 100: "))

while number != guess:
    if guess > number:
        guess = int(input(f"The number is lower than {guess}, try again: "))
    elif guess < number:
        guess = int(input(f"The number is higher than {guess}, try again: "))

print("Congratulations! You guessed the number.")

