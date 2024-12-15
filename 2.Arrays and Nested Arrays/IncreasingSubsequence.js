function solve(arr) {
  let result = arr.reduce(function (result, currentValue) {
    if (currentValue >= result[result.length - 1] || result.length === 0) {
      result.push(currentValue);
    }
    return result;
  }, []);
  console.log(result);
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
