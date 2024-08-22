totalGrades = 0
grade = 0
counter = 0

while grade != -1:
  grade = float(input("Enter the grade you want to include: (Press -1 to finish): "))
  if grade != -1:
    totalGrades += grade
    counter += 1

average = totalGrades/counter

print(f"You've entered {counter} grades and the average is {average:.2f}.")
