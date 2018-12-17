let toyota = {
    drive() {
        return 'drive toyota';
    }
};

let camry = {
    drive() {
        return `${super.drive()} camry `;
    }
};

Object.setPrototypeOf(camry, toyota);
console.dir(camry.drive());
