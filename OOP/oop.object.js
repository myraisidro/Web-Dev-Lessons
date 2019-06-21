// Using object

// object literal var equals the object
const personPrototype = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
};

const mary = Object.create(personPrototype);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');
console.log(mary.greeting());

const john = Object.create(personPrototype, {
    firstName: {value: 'John'},
    lastName: {value: 'Doe'},
    age: {value: 36}
});

console.log(john.greeting());
