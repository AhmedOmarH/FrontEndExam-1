// 01

function recursiveLength(str) {
    if (str === "") {
        return 0;
    } else {
        return 1 + recursiveLength(str.substring(1));
    }
}

// 02

for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 03

function elementsOnOddPositions(arr) {
    return arr.filter((_, index) => index % 2 === 0);
}

// 04

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 06

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 07

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set_value(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Zebra extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    message() {
        console.log(`This is a Zebra. Name: ${this.name}, Age: ${this.age}. It is from Africa.`);
    }
}

class Dolphin extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    message() {
        console.log(`This is a Dolphin. Name: ${this.name}, Age: ${this.age}. It lives in the ocean.`);
    }
}
