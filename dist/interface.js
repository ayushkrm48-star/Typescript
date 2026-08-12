function printStudent(student) {
    console.log(`Student Name is : ${student.name}`);
    console.log(`Student Age is : ${student.age}`);
    console.log(`Student ID is : ${student.studentId}`);
}
const student1 = {
    name: "Ayush Kumar Maurya",
    age: 22,
    studentId: 3068,
};
printStudent(student1);
class coder {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
function printUser(u) {
    console.log(`User Name is : ${u.name1}`);
}
// here we are using the Partial utility type to make all properties of the user2 type optional. This allows us to pass an object with only some of the properties defined, without causing a type error. 
printUser({ name1: "Ayush" });
// now we will use Required
function printuserDetails(user) {
    console.log(`User Name is : ${user.name}`);
    console.log(`User Age is : ${user.age}`);
    console.log(`User Phone is : ${user.phone}`);
    console.log(`User Address is : ${user.address}`);
}
// here we are using the Required utility type to make all properties of the user3 type required. This means that when we pass an object of type user3 to the printuserDetails function, all properties must be defined, otherwise a type error will occur.
printuserDetails({ name: "Ayush", age: 22, phone: "1234567890", address: "India" });
// now we will use Pick
function printSelectedUserDetails(user) {
    console.log(`User Name is : ${user.name}`);
    console.log(`User Age is : ${user.age}`);
}
// here this means that user argument must be of type user3 but it will have only name and age as it variable
printSelectedUserDetails({ name: "Ayush", age: 22 });
// pick utility type allows us to create a new type by selecting specific properties from an existing type. In this case, we are creating a new type that only includes the name and age properties from the user3 type. This allows us to pass an object with only those properties defined to the printSelectedUserDetails function, without causing a type error.
// now we will use Omit
function printOnlyUser(user) {
    console.log(`User Phone number is  is. : ${user.phone}`);
    console.log(`User Address is : ${user.address}`);
}
printOnlyUser({ phone: "2324", address: "India" });
export {};
//# sourceMappingURL=interface.js.map