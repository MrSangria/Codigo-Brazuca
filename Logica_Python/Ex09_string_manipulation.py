phrase = str(input("Write any sentence you want: "))
letter = str(input("Type the letter you want to count: "))

if len(letter) != 1:
    print("Please type only one letter.")
else:
    counter = phrase.count(letter)
    print(f"The letter {letter} appeared {counter} times in your phrase.")
