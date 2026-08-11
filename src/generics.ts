// generics 

function getValue<T>(value : T) : T{
    return value;
}

// multiple generics
function getValues<T,U,V>(first : T , second : U , third : V):[T,U,V]{
    return [first,second,third];
}

// it is not mandatory to return the same type as the input type. We can return any type we want.

function getlength<T>(value : T[]):number{
    return value.length;
}

console.log(getlength([1,2,3,4,5]));
console.log(getlength(["Ayush" , "Sidhu" , "Shiwang"]));

// now lets generics with interfaces
interface apiResponse<T>{
    success : boolean,
    data : T,
    message? : string
}

interface user{
    id : number,
    name : string
}


interface product{
    id : number,
    price : number
}

const userResponse : apiResponse<user> = {
    success : true,
    data : {
        id : 1234,
        name : "User"
    },
    message : "Hello My Name is Ayush"
}

const productResponse : apiResponse<product> = {
    success : false,
    data : {
        id : 123445,
        price : 660
    },
}

// generics constriants
// we can use generics constraints to restrict the types that can be used as generic parameters.
// problem is that we can pass any type to the generic function. We want to restrict the types to only those that have a length property.
interface hasLength{
    length : number;
}

function getLength<T extends hasLength>(value : T) : number{
    return value.length;
}

console.log(getLength("Ayush"));
console.log(getLength([1,2,3,4,5]));    
console.log(getLength({length : 10})); // here we are passing an object with length property. This is allowed because the object has a length property.

// console.log(getLength(12345)); // here we are passing a number. This is not allowed because the number does not have a length property.

// now lets study the concept of T[K] in generics. T[K] is a way to access the type of a property of an object type. K is a key of the object type T. This allows us to create generic functions that can work with specific properties of an object type.

interface user2 {
    name: string;
    age: number;
    email: string;
}
type a = user2["email"]; // here we are accessing the type of the email property of the user2 interface. The type of a will be string.

// (keyof user2);// here we are getting the keys of the user2 interface. The type of keyof user2 will be "name" | "age" | "email".

function getProperty<T , K extends keyof T>(obj : T , key : K) : T[K]{
    return obj[key];
}

const user3 : user2 = {
    name : "Ayush",
    age : 22,
    email : "ayush@gmail.com"
}

console.log(getProperty(user3 , "name")); // here we are passing







