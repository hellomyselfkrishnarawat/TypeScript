// let nums: number[] = [1, 2, 3, 4, 5];

// let names: String[] = ["Alice, Bob", "Ram", "Shyam"]

// type User = {
//     name: String,
//     age: number
// }

// let users: User[] = [{
//     name: "Krishna",
//     age: 20
// }, {
//     name: "Lei",
//     age: 21
// }]

// console.log("nums array: ",nums);
// console.log("names array ", names)

// console.log("users array: ",users);

// let BmiTuple: [number,number] = [20,10];
// console.log("BmiTuple: ", BmiTuple);

// let object: {readonly id : String} = {
//     id : "1wxe3"
// }

// console.log("typeScript Object: ", object);


interface User {
    id: number,
    username: String,
    email: String,
    age?: number,
    isActive: boolean,
    skills: String[],
    adress: {
        country: String,
        state: String,
        city: String,
        pinCode: number
    }
}

type Role = "admin" | "user" | "moderator"

interface Admin extends User {
    role: Role,
    department: String,
    permissions: String[]
}

interface Developer extends User {
    projects: String[],
    experience: number,
    specialization: String
}

type timeStamp = {
    createdAt: Date,
    updatedAt: Date
}

type AdminRecord = Admin & timeStamp

const users: readonly User[] = [{ id: 1, username: "Krishna", email: "krishna@example.com", age: 20, isActive: true, skills: ["JavaScript", "TypeScript"], adress: { country: "India", state: "California", city: "Los Angeles", pinCode: 123456 } },
{ id: 2, username: "Lei", email: "lei@example.com", age: 22, isActive: true, skills: ["Python", "Java"], adress: { country: "USA", state: "New York", city: "New York", pinCode: 654321 } }]

const admins: readonly AdminRecord[] = [{ id: 1, username: "Admin1", email: "admin1@example.com", role: "admin", department: "IT", permissions: ["read", "write"], createdAt: new Date(), updatedAt: new Date(), isActive: true, skills: ["JavaScript", "TypeScript"], adress: { country: "India", state: "California", city: "Los Angeles", pinCode: 123456 } }, { id: 2, username: "Admin2", email: "admin2@example.com", role: "admin", department: "HR", permissions: ["read"], createdAt: new Date(), updatedAt: new Date(), isActive: true, skills: ["Python", "Java"], adress: { country: "USA", state: "New York", city: "New York", pinCode: 654321 } }]


const displayUser = (user : User) : void =>{
    console.log(user)
}

if (users[0]) {
    displayUser(users[0]);
}