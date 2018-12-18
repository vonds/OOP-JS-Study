const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

console.log(mary.greeting());

const vonds = Object.create(personPrototypes, {
    firstName: { value: 'Vonds' },
    lastName: { value: 'Oloop' },
    age: { value: 31 }
});

console.log(vonds)
console.log(vonds.greeting())
