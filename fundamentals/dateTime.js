let val;

const today = new Date();
let birthday = new Date('5-13-1983 11:25:00');
birthday = new Date('May 13 1983');
birthday = new Date('5/13/1983');


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getMinutes();
val = today.getFullYear();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1983);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(30);

// val = today.getTime();



console.log(birthday);

