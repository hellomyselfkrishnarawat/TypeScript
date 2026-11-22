"use strict";
// let nums: number[] = [1, 2, 3, 4, 5];
Object.defineProperty(exports, "__esModule", { value: true });
const users = [{ id: 1, username: "Krishna", email: "krishna@example.com", age: 20, isActive: true, skills: ["JavaScript", "TypeScript"], adress: { country: "India", state: "California", city: "Los Angeles", pinCode: 123456 } },
    { id: 2, username: "Lei", email: "lei@example.com", age: 22, isActive: true, skills: ["Python", "Java"], adress: { country: "USA", state: "New York", city: "New York", pinCode: 654321 } }];
const admins = [{ id: 1, username: "Admin1", email: "admin1@example.com", role: "admin", department: "IT", permissions: ["read", "write"], createdAt: new Date(), updatedAt: new Date(), isActive: true, skills: ["JavaScript", "TypeScript"], adress: { country: "India", state: "California", city: "Los Angeles", pinCode: 123456 } }, { id: 2, username: "Admin2", email: "admin2@example.com", role: "admin", department: "HR", permissions: ["read"], createdAt: new Date(), updatedAt: new Date(), isActive: true, skills: ["Python", "Java"], adress: { country: "USA", state: "New York", city: "New York", pinCode: 654321 } }];
const displayUser = (user) => {
    console.log(user);
};
if (users[0]) {
    displayUser(users[0]);
}
//# sourceMappingURL=typescript.js.map