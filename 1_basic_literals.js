// const s1 = 'Hello';
// console.log(typeof s1);
// return string

// const s2 = new String('Hello');
// console.log(typeof s2);
// return object

// console.log(window);
// alert(1);
// console.log(navigator.appVersion);


// Object Literal 
const book1 = {
    title: 'Book One',
    author: 'Baby Bop',
    year: '2013',
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(Object.values(book2));
console.log(Object.keys(book2));

