function factorial(num) {
    let factorial = 1; 
    while (num > 1) {
        factorial = factorial * num;
        num--;
    }
    return factorial;
}

