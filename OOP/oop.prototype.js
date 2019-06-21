// Prototype
// Object.prototype
// Person.prototype

// Person constructor
// Constructor has a capital letter on the first letter
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

// Calculate Age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// get married
Person.prototype.getFullName = function(newLastName) {
    return `${this.firstName} ${this.lastName}`;
}

// get fullname
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '9-12-1998');
const mary = new Person('Mary', 'Johnson', 'March 27 1997');

console.log(mary.calculateAge());

mary.getsMarried('Doe');
console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('firstName'));

console.log(mary);
// console.log(mary.hasOwnProperty('getFullName'));