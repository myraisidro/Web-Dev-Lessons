// ES6 

class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getFullYear() - 1970);
    }

    getsMarried(newLastname){
        this.lastName = newLastname;
    }
    
    static addNumbers(x, y){
        return x + y;
    }
}

const mary = new Person('Mary', 'Johnson', 'March 27 1997');
mary.getsMarried('Thomson');
console.log(mary.greeting());

console.log(Person.addNumbers(1,2));