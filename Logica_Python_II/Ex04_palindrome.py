words = str(input("Enter the word or phrase you want to verify: "))

words.lower()

if words == words[::-1]:
    print(f"{words} is palindrome.")
else:
    print(f"{words} is not palindrome.")

