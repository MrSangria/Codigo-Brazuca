height = float(input("Enter your height (m): "))
weight = float(input("Enter your weight (kg): "))

imc = weight / (height * height)

print(f"Your body mass index (BMI) is: {imc:.2f}")