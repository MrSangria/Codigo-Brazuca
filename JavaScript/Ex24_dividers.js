function isDivider(num) {
    let dividers = [];
    for (let i = num; i > 0; i--) {
        if (num % i === 0) {
            dividers.push(i);
        }
    }
    return dividers.reverse();
}


