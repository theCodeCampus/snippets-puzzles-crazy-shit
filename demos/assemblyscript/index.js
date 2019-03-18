

function fibonacciJs(num) {
  if (num <= 1) return 1;
  return fibonacciJs(num - 1) + fibonacciJs(num - 2);
}

let start = Date.now();
console.log(fibonacciJs(40));
let dur = Date.now() - start;
console.log(dur);

///////////////////////////////////////////////////////////////

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// var fs = require("fs");
// var compiled = new WebAssembly.Module(
//   fs.readFileSync(__dirname + "/build/optimized.wasm"));
// var imports = {};
//
// var wa = new WebAssembly.Instance(compiled, imports).exports;
// start = Date.now();
// console.log(wa.fibonacci(40));
// dur = Date.now() - start;
// console.log(dur);



