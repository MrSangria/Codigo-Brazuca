function charCounter(string, char) {
    let array = string.toLowerCase().split("");
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === char) {
            counter++; 
        }
    }
    return counter;
}
