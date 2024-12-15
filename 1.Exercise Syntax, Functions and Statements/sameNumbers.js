function solve(number) {

    let sum = 0;
    let lastDigit = number % 10;
    let notEqualCount = 0;

    while (number / 10 > 0) {
    let digit = number % 10;
    sum += digit;

    if (digit !== lastDigit) {
        notEqualCount++;
    }
    
    lastDigit = digit;
    number = Math.floor(number / 10);
    }

    console.log(notEqualCount === 0 ? true : false);
    console.log(sum);
    
}

solve(222)