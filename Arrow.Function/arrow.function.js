// const sayHello = function(){ // Function expression
//     console.log('hello world');
// }

// const sayHello = () =>{
//     console.log('hello world');
// }

/* 
Rules:
1: One line function does not need braces
2: One line returns
3: Return Object
*/

// Rule 1: One line function does not need braces
const rule1 = () => console.log('Rule 1: One line function');
rule1();

// Rule 2: One line returns
const rule2 = () => 'Rule 2: One line return';
console.log(rule2());

// Rule 3: Return object
const rule3 = () => ({msg: 'Rule 3: return object'});
console.log(rule3());

// Rule 4: Single parameters does not need parenthesis()
const rule4 = paren => console.log(`Rule 4: Single parameters does not need ${paren}`)
rule4('parenthesis');

// Rule 5: Multiple parameters need parenthesis()
const rule5 = (para, pare) => console.log(`Rule 5: Single ${para} need ${pare}`)
rule5('parameter','parenthesis');

// Rule 6 Array
// .map : high order array method
const users = ['Nathan', 'John', 'William'];

// const nameLength = users.map(function(name){
//     return name.length;
// });

// Shorter way
// const nameLength = users.map((name) =>{
//     return name.length;
// });

// Shortest
const nameLength = users.map(name => name.length);

console.log(nameLength);