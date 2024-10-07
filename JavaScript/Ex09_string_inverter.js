function inverter(string) {
    let array = string.split("")
    let reversedString = "";
    while (array.length > 0) {
        reversedString += array.pop();
    }
    return reversedString;
}   