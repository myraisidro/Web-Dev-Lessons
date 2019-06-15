// CONCAT
const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Myra';
const tags = 'Web Development, Web Design and Programming ';

let val;

// Concatination
val = firstName + ' ' + lastName;

// Append
val = 'Bobby ';
val += 'Ferrer';

val = str + firstName + lastName + ' and I am ' + age + ' years old. And Im taking ' + tags + 'course.';

// Escaping
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('i');

// chartAt()
val = firstName.charAt('2');

// // Get last char
val = firstName.charAt(firstName.length - 1);

// Substring
val = firstName.substring(0, 4);

// Slice
val = firstName.slice(1, 5);
val = firstName.slice(-3);

// split()
val = str.split(' ');
console.table(val = str.split(' '));

val = tags.split(' ');

// Replace
val = str.replace('Myra', 'Jack');

// Includes
val = str.includes('hello');


console.log(val);