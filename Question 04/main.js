// question 02

// 1-False
// 2-True
// 3-True
// 4-False
// 5-False
// 6-True
// 7-True
// 8-True

// Question 04

var p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
})
    p.catch(error => console. log(error))
    p.catch(error => console.log(error.message))
    p.catch(error => console.log(error.message))

//  output

//      Error: The Fails!
//      at <anonymous>:2:12
//      at new Promise (<anonymous>)
//      at <anonymous>:1:9
//      The Fails!
//      The Fails!

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};
console.log(member.getFullName());

/*
output

Error

member.getFullName is not a function

*/

const SumBy = num1 => num2 => num1 + num2;
const sumByTwo = SumBy(2);
const sumByThree = SumBy(3);

console.log(sumByTwo(4));
console.log(sumByThree(5));

/*
output

6
8

*/

class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
    }
    constructor(newColor) {
        this.newColor = newColor;
    }
}
const freddie = new Chameleon('Purple');
console. log(freddie.colorChange('orange'));

/*
output

Error 

freddie.colorChange is not a function

*/

let age = parseFloat(prompt("Enter Your Age"));
let accessAllowed = age >= 18 ? true : false ;
console.log(typeof(accessAllowed));

function greeting(){
    return "Welcome All";
}
console.log(typeof(greeting()));

/*
output

boolean
string

*/

setTimeout(function(){
    setTimeout(function(){
        console.log(2);
        setTimeout(function(){
            console.log(3);
        } , 0) ;
    }, 1000);
    setTimeout(function(){
        console.log(4);
    });
    console.log(1);
} , 2000);
console.log(0);

/*
output

0
waits two seconds
1
4

waits one seconds
2
3

*/

function counter(){
    var i = 0;
    return ++i
}

console.log(i);
    
/*
output

Error 

i is not defined

*/

let obj = {
    msg : "hello world",
    x : 10
}
var x = "msg";
    
console.log(obj[x]);
console. log(obj["x"]);

/*
output

hello world
10

*/

const euros = [29.76, 41.85, 46.5];

const doubled = euros.reduce((total, amount) => {
    total.push(amount *2);
    return total;
}, []);

console.log(doubled);

/*
output

(3) [59.52, 83.7, 93]

*/

const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const fromIndex = 1;
const removeCount = 2;
const newNames = [
    ...names.slice(0, fromIndex),
    ...names. slice(fromIndex + removeCount)
];
console.log(newNames);

/*
output

(2) ['Batman', 'Bane']

*/