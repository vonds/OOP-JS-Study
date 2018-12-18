let toyota = {
    drive() {
        return 'driving toyota';
    },
    break() {
        return 'breaking toyota';
    }
};

let camry = {
    drive() {
        return 'driving camry';
    }
};

let copyToyota = Object.assign({}, toyota);

Object.assign(camry, toyota);

console.dir(copyToyota);