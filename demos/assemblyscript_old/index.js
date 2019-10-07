
function fibonacciJs(num) {
  if (num <= 1) return 1;
  return fibonacciJs(num - 1) + fibonacciJs(num - 2);
}

let start = Date.now();
console.log(fibonacciJs(42));
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


const fs = require("fs");
const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/optimized.wasm"));
const imports = {};

const wa = new WebAssembly.Instance(compiled, imports).exports;
start = Date.now();
console.log(wa.fibonacci(42));
dur = Date.now() - start;
console.log(dur);



