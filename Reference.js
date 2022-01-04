const person = {
    name: 'max'
};

const secondPerson = person; // it works as pointer

const thirdPerson = {
    ...person
};   //it is full copy of object

person.name = 'Manu';

console.log(secondPerson);
console.log(thirdPerson);