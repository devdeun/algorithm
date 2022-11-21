function solution(my_string) {
  const calc = (a, b) => {
      return operator === "+" ? a + b : a - b;
  }
  
  let operator = "";
    return my_string.split(" ").reduce((acc, cur) => {
      if (!+cur) {
          operator = cur;
          return acc;
      }
      if (!operator) return acc + +cur;    
      if (operator && !isNaN(+cur)) return calc(acc, +cur);
    }, 0);
}