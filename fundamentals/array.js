// ARRAY and ARRAYS METHOD

const numbers = [43,45,56,34,44,5];
const numbers2 = new Array(22,34,54,76,65);
const fruit = ['Apple', 'Banana', 'Pearl', 'Orange'];
const mixed = [22, 'Hello', true, undefined, null, {a: 1, b:2}, new Date()];

let val;

// // Get Array length
// val = numbers.length;

// // Check if is array
// val = Array.isArray(numbers);

// // Get single value
// val = numbers[3];
// val = numbers[0];

// // Insert into array
// numbers[2] = 100;

// // Find Index of Value
// val = numbers.indexOf(34);

// // Mutating Arrays
//     // ADD ON THE END
//     numbers.push(250);
//     // ADD ON TO FRONT
//     numbers.unshift(120);
//     // TAKE OFF FROM END
//     numbers.pop();
//     // TAKE OFF FROM FRONT
//     numbers.shift();
//     // SPLICE VALUES
//     numbers.splice(0, 3);
//     // REVERSE
//     numbers.reverse();
//     // CONCATINATE
//     val = numbers.concat(numbers2);
//     // SORTING ARRAYS
//     val = fruit.sort();
//     val = numbers.sort();

// Use the "compare function"
    // val = numbers.sort(function(x, y){
    //     return x - y;
    // });

// Reverse sort
    // val = numbers.sort(function(x, y){
    //     return y - x;
    // });

// FIND

    function over50(num) {
        return num > 50;
    }

    val = numbers.find(over50);
    
console.log(val);