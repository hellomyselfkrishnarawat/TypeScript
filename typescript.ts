let nums: number[] = [1, 2, 3, 4, 5];

let names: String[] = ["Alice, Bob", "Ram", "Shyam"]

type User = {
    name: String,
    age: number
}

let users: User[] = [{
    name: "Krishna",
    age: 20
}, {
    name: "Lei",
    age: 21
}]

console.log("nums array: ",nums);
console.log("names array ", names)

console.log("users array: ",users);

let BmiTuple: [number,number] = [20,10];
console.log("BmiTuple: ", BmiTuple);