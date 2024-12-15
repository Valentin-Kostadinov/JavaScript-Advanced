function solve(input) {
    let number = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case 'chop':
                number /= 2;
                break;
                case 'dice':
                number = Math.sqrt(number);
                break;
                case 'spice':
                number++;
                break;
                case 'bake':
                number *= 3;
                break;
                case 'fillet':
                number *= 0.80; // mahame 20 %
                break;
        }
    console.log(number);
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])
console.log('---------------------------------------')
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])