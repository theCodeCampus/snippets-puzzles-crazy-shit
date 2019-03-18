
interface Input {
  a: number;
  b: Date;
}

const input: Input = {
  a: 1,
  b: new Date()
};

const json = JSON.stringify(input);
const output = JSON.parse(json);

console.log(output.a.toFixed(1));
console.log(output.b.substr(1));

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

type JsonObject<T> = { [P in keyof T]: T[P] extends Date ? string : T[P] };
