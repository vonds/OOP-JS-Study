// Constructor 
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Instantiate an Object
const book1 = new Book('Book One', 'Sarah Olamina', '2013');
const book2 = new Book('Book two', 'Kendra Gold', '2016');

console.log(book2);