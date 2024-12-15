const solve = (arr, step) => {
  function predicate(el, index) {
    return index % step === 0;
  }
  let result = arr.filter(predicate);
  return result;
};

console.log(solve(["5", "20", "31", "4", "20"], 2));
