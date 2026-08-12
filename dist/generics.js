// generics 
function getValue(value) {
    return value;
}
// multiple generics
function getValues(first, second, third) {
    return [first, second, third];
}
// it is not mandatory to return the same type as the input type. We can return any type we want.
function getlength(value) {
    return value.length;
}
console.log(getlength([1, 2, 3, 4, 5]));
console.log(getlength(["Ayush", "Sidhu", "Shiwang"]));
const userResponse = {
    success: true,
    data: {
        id: 1234,
        name: "User"
    },
    message: "Hello My Name is Ayush"
};
const productResponse = {
    success: false,
    data: {
        id: 123445,
        price: 660
    },
};
function getLength(value) {
    return value.length;
}
console.log(getLength("Ayush"));
console.log(getLength([1, 2, 3, 4, 5]));
console.log(getLength({ length: 10 })); // here we are passing an object with length property. This is allowed because the object has a length property.
// (keyof user2);// here we are getting the keys of the user2 interface. The type of keyof user2 will be "name" | "age" | "email".
function getProperty(obj, key) {
    return obj[key];
}
const user3 = {
    name: "Ayush",
    age: 22,
    email: "ayush@gmail.com"
};
console.log(getProperty(user3, "name")); // here we are passing
export {};
//# sourceMappingURL=generics.js.map