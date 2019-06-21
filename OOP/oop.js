// Object Literal
// const person = {
//     name: 'John'
// }
// console.log(person.name); //output to get the object property

// Person Constructor
// function Person(name){
//     this.name = 'John';
// }

// const john = new Person();
// console.log(john.name);

// function Person(name, age) { //Person() is a constructor
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }
// console.log(this);
// const john = new Person('john', 36);
// console.log(john.age);


// CONSTRUCTOR AND THIS. KEYWORD
// Person constructor

function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const my = new Person("my", '8-04-1998');
console.log(my.calculateAge());

