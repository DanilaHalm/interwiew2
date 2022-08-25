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

let kindom = Object.create(testObj)
Object.getPrototypeOf(kindom) // => 

console.log(kindom.hasOwnProperty("king")) // =>
console.log("king" in kindom) // =>
console.log("toString" in kindom) // =>

kindom.king // => 
kindom.valet = "valet"
kindom.valet // =>
testObj.valet // =>

let testObj2 = {
    dog: "freya",
    cat: "none"
}
let kindom2 = Object.assign(testObj,testObj2)


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

//------------ 
let freya = {
    breed: "border collie",
    age: 4
}
Object.defineProperty(freya,"breed",{
    writable: false
})
freya.breed = "aussie"
console.log(freya.breed) // => 

//-----

Object.defineProperty(freya,"age",{
    enumerable: false
})

console.log(Object.keys(freya)) // =>
let props = []
for(let prop in freya){
    props.push(prop)
}
console.log(props) // => 

console.log("age" in freya) //=>
console.log(freya.hasOwnProperty("age")) //=>
console.log(Reflect.ownKeys(freya)) //=>
