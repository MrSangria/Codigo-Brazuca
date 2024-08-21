shoppingList = []
items = ""

while items != "0":
  items = input("Enter the items you want to include in the list: (Press 0 to finish): ")
  shoppingList.append(items)

shoppingList.remove("0")
print(f"here is your list: {shoppingList}")