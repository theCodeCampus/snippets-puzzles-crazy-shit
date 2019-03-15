"use strict";
var input = {
    a: 1,
    b: new Date()
};
var json = JSON.stringify(input);
var output = JSON.parse(json);
console.log(output.a.toFixed(1));
console.log(output.b.substr(1));
