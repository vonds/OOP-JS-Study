// Object Literal
// const vonds = {
//     name: 'Vonds',
//     age: 31
// }

// console.log(vonds);
// console.log(vonds.age);

// Person constructor
function Person(name, age, dob) {
    this.name = name;
    this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const vonds = new Person('Vonds', 31, '9-21-1987');
// const tarik = new Person('Tarik', 26);

console.log(vonds.calculateAge());