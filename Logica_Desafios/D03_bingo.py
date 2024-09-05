from random import randrange

card = []

while len(card) < 5: 
    number = randrange(1, 75)
    if number not in card:
        card.append(number) 

print(card)

raffleCount = 0
drawn_numbers = []

while len(card) > 0:
    raffle = randrange(1, 75)
    if raffle not in drawn_numbers:
        print(f"Drawn number: {raffle}")
        drawn_numbers.append(raffle)     
        if raffle in card:
            card.remove(raffle)
            print(f"You got it right! Remaining numbers on the card: {card}")
        
        raffleCount += 1

print(f"Congrats! You won the bingo after {raffleCount} raffles.")
    