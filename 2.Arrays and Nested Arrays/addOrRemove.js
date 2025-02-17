function solve(arr) {
    let result = [];
    let number = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'add') {
            result.push(number);
        } else if (arr[i] == 'remove') {
            result.pop();
        }
        number++;
    }
    console.log(result.length != 0 ? result.join('\n'): 'Empty');
}

solve(
    ['add', 
    'add', 
    'add', 
    'add']
    )
    console.log('---------------');
    solve(
        ['add', 
            'add', 
            'remove', 
            'add', 
            'add']            
        )
        console.log('---------------');
        solve(
            ['remove', 
                'remove', 
                'remove']                
            )