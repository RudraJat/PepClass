const names=["rudra","vikas","ankit","hitesh"];
const ages=[20,21,22,23];

//Spread operator
const comb = [...names, ...ages];
comb.forEach((a)=>console.log(a));

const [first, second, ...rest]=comb;
console.log("----");
console.log(first);
console.log(second);
console.log(rest);

//destructuring 
const person={
    name: "Rudra",
    age: 20,
    gender: "M"
};

const {name, age, gender}=person;
console.log("----");
console.log(name);
console.log(age);
console.log(gender);