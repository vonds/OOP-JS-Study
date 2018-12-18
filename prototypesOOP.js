// Object.prototype
// Person.prototype

// Person constrcutor 
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

// Calculate age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
}

const vonds = new Person('Vonds', 'Olyamina', '9-21-87');
const mary = new Person('Mary', 'Stephens', 'March 20 1978');

console.log(mary.calculateAge());
console.log(vonds.calculateAge());
console.log(mary.getFullName());
console.log(vonds.getFullName());
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));