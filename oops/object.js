const person = {
    name: "Alice",
    age: 32
};

//. member accessing
console.log(person.name);
console.log(person.age);

//object within function
function greet(user){
    console.log("Hello "+user.name);
}

//json
const jsonPerson = JSON.stringify(person, null, 2);
console.log(jsonPerson);

//arrays of objects
const users = [
    {
        name:"rudra",
        age:20
    },
    {
        name:"rahul",
        age:21
    }
]

users.forEach(p=>console.log(p.age));

const names = users.map((p,i)=>{
    return i+": "+p.name;
});
console.log(names);