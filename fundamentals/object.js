const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 48,
    email: 'steve@gmail.com',
    hobbies: [ 'music', 'sport'],
    address: {
        city: 'Manila',
        state: 'NCR'
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }
};

let val;
val = person;

// Get Specific Value
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();
// console.log(val);

const people = [
    {name: 'John', age: 36}, 
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 40}
];


for(let i= 0; i < people.length; i++){
    console.log(people[i].name);
    console.log(people[i].age);
} 


