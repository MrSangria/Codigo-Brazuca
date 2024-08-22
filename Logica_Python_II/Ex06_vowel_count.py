phrase = str(input("Enter the phrase you want to check: "))

lowerPhrase = phrase.lower() 

vowel = 0
for i in lowerPhrase:
    if i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u':
        vowel += 1


print(f"{phrase} has {vowel} vowels.")