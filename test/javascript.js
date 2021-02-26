/* Base errors */

// optimize regexp
const reg = /[a-zA-Z_0-9][A-Z_\\da-z]*\\e{1,}/g;

// space, comma
const a = [1,2,3,reg];
const b = {a:1,b:2, c:3};

let c = d = 0;
let e, f, g;

// comma dangle
  const z = {
    a: 1,
    b: 2,
    c: 3 == e,
};

// deny loops
const array = [1,2, 3];

for (let i in array) {
    console.log(array[i]);
}

// caniUse
if (navigator.serviceWorker) {

}

// classes
class Foo {
  b = 'bar';

  c() {}

  constructor() {} // error Expected constructor to come before method c

  static a() {} // error Expected static method a to come before property b
}
