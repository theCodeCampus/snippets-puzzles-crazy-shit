
type Person = {
  name: string;
  height: number;
  created: Date;
}

const input: Person = {
  name: "Max",
  height: 180,
  created: new Date(),
};

const json = JSON.stringify(input);
const output: JsonObject<Person> = JSON.parse(json);

console.log(output.name);
console.log(output.height);
console.log(output.created);


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

type JsonObject<T> = {
  [P in keyof T]: T[P] extends Date ? string : T[P]
};
