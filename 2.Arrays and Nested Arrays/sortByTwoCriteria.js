function solve(arr) {
    let result = arr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    })
    console.log(result.join('\n'));
}

solve(
    ['alpha', 
    'beta', 
    'gamma']
    )