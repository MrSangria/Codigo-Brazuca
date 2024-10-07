function palindrome(string) {
    const lowerString = string.toLowerCase().split("");
    const reversedString = lowerString.slice().reverse().join("");
    const originalString = lowerString.join("");

    return originalString === reversedString; 
}