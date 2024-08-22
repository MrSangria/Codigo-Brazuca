temperature = float(input("Type the temperature you want to convert (°C): "))

fahrenheit = (temperature * 9/5) + 32
kelvin = temperature + 273.15

print(f"Temperature in fahrenheit: {fahrenheit:.2f} °F")
print(f"Temperature in kelvin: {kelvin:.2f} K")