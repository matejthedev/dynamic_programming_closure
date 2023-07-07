const performance = require('perf_hooks').performance; 

function fibonacci() {
  const memo = {}; // memoization table

  function fib(n) {
    if (n <= 1) {
      return n;
    }

    // Check if the result is already memoized
    if (memo[n]) {
      return memo[n];
    }

    // Calculate the Fibonacci number recursively
    const result = fib(n - 1) + fib(n - 2);

    // Memoize the result for future use
    memo[n] = result;

    return result;
  }

  return {
    calculate: function(n) {
      const start = performance.now();
      const fibonacciResult = fib(n);
      const end = performance.now();
      const duration = end - start;
      
      console.log(`The ${n}th Fibonacci number is ${fibonacciResult}. Calculation took ${duration.toFixed(2)}ms.`);
      
      return fibonacciResult;
    }
  };
}

const calculateFibonacci = fibonacci();

console.log(calculateFibonacci.calculate(1000));
console.log(calculateFibonacci.calculate(1000));