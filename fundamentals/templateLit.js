const name = 'John';
const age = 36;
const job = 'Web Developer';
const city = 'Manila';

let html;

// Without template string (es5)
// html = '<ul><li>Name: ' + 
//         name + ' </li><li>Age: ' + 
//         age + '</li><li>Job: ' + 
//         job + '</li><li>City: ' + 
//         city + '</li></ul>';

//         document.body.innerHTML = html;


function myra() {
    return 'God is Good';
}

// With template string es6 (ECMAScript 6)
html = `
    <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${myra()}</li>
        <li>
            ${age > 36 ? 'Over 36' : 'Under 36'} <!-- if else statemenf for es6 -->
        </li>
    </ul>
`;

document.body.innerHTML = html;

