var a = "danila" 

console.log(a + b);

var b = "nastya"

//--------- 

var c = "danila" 
var d
console.log(c + d);

d = "nastya"
//---------- 
let f = "danila" 

console.log(f + g);

let g = "nastya"
//---------- 
let x = "danila" 
let y
console.log(x + y);

y = "nastya"
//----------

let func = foo();
let k = 1 
function foo(){
    return k
}
//-----------
let testObj = {
    king: "danila",
    queen: "nastya"
} 

Object.keys(testObj) // => 

Object.values(testObj) // => 

let entries = Object.entries(testObj) // => 

let fromEntries = Object.fromEntries(entries) // => 

let fooTestObj = Object.freeze(testObj)
fooTestObj.queen = "somebody" // => 
fooTestObj.princess = "someone" //

let barTestObj = Object.seal(testObj)
barTestObj.queen = "freya" // =>
barTestObj.princess = "someone" // =>

testObj.hasOwnProperty("king") // =>
