function arrayMap(array, func) {
    let mappedArray = array.reduce((a, x) => {
        a.push(func(x))

        return a;
    }, []);

    return mappedArray;
}

let nums = [1,2,3,4,5];
let mappedNumbers = arrayMap(nums, x => x * 2);

console.log(mappedNumbers);