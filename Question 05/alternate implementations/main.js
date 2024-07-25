//  Using Prototype

function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}

MyObject.prototype.getName = function() {
    return this.name;
};

MyObject.prototype.getMessage = function() {
    return this.message;
};

//  Using Class 

class MyObject {
    constructor(name, message) {
        this.name = name.toString();
        this.message = message.toString();
    }

    getName() {
        return this.name;
    }

    getMessage() {
        return this.message;
    }
}