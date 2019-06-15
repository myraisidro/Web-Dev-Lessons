// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// Equal to
// if (id == 100){
//     console.log('CORRECT!');
// } else {
//     console.log('INCORRECT!');
// }

// EQUAL TO VALUE AND TYPE
// if (id === 100){
//     console.log('CORRECT!');
// } else {
//     console.log('INCORRECT!');
// }

// NOT Equal to
// if (id != 100){
//     console.log('CORRECT!');
// } else {
//     console.log('INCORRECT!');
// }

// NOT EQUAL TO VALUE AND TYPE
// if(id !== 100){
//     console.log('CORRECT!');
// } else {
//     console.log('INCORRECT!');
// }

// if(typeof id !== 'undefined') {
//     console.log(`The ID is  ${id}`);
// } else {
//     console.log('No ID');
// }

// less than
// if(id <= 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');s
// }

// IF ELSE IF
const color = 'yellow';

if(color == 'red'){
    console.log('color is red');
} else if (color === 'blue'){
    console.log('color is blue');
} else {
    console.log('color is not red and not blue');
}

// Logical Operators
const name = 'Steve';
const age = 16;

// AND &&
if (age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 9) {
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if (age <= 16 || age > 65){
    console.log(`${name} cannot run in race`);
} else {
    console.log(`${name} is registered for a race`)
}

// TERNARY OPERATOR - ES6
console.log(id === 100 ? 'Correct' : 'Incorrect'); //if else

// WITHOUT BRACES
if(id === 100)
    console.log('Correct');
    else
        console.log('Incorrect');

