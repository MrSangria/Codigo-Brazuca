function evenSum(list) {
    return list.reduce((sum, current) => {
        return current % 2 === 0 ? sum + current : sum;
    })
}

