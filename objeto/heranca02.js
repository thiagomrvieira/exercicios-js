//cadeia de protótipos (prototype chain)

const avo = { attr01: 'A'}
const pai = { __proto__: avo, attr02: 'B'}
const filho = { __proto__: pai, attr03: 'C'}

console.log(filho.attr03, filho.attr02, filho.attr01)