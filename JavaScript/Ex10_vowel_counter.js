function vowelCounter(string) {
    let array = string.toLowerCase().split("");
    let vowels = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i] === "a" || array[i] === "e" ||array[i] === "i" ||array[i] === "o" ||array[i] === "u") {
            vowels++;
        } 
    }
    return string + " has " + vowels + " vowels."       
}