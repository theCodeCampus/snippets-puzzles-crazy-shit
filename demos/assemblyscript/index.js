const fs = require("fs");
const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/optimized.wasm"));
const imports = {
  env: {
    abort(_msg, _file, line, column) {
      console.error("abort called at index.ts:" + line + ":" + column);
    }
  }
};

const wasm = new WebAssembly.Instance(compiled, imports).exports;

console.log(wasm.add(1, 2));
// console.log(wasm.createPerson());

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function fib(num) {
  if (num <= 1) return 1;
  return fib(num - 1) + fib(num - 2);
}

// let start = Date.now();
// console.log(fib(40));
// let dur = Date.now() - start;
// console.log("Duration JS:", dur) ;
//
// start = Date.now();
// console.log(wasm.fib(40));
// dur = Date.now() - start;
// console.log("Duration WA:", dur) ;



