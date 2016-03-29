const INI = require('..');

console.log(INI.stringify({
  a: {
    b:1
  },
  c: {
    d: [1,2,3,4]
  }
}));
