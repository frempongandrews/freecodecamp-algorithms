function factorize(num) {
    if (!isNaN(num)) {
        var result = 1;
        for (var i = num; i >= 2; i--) {
            result *= i;
        }
    }
    console.log(result);
}

factorize(5);
