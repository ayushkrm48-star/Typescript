// arrays --> 
const student = ["Ayush", "Sidhu", "Shiwang"];
const students = ["Ayush", 20, "Sidhu", 21, "Shiwang", '21'];
const studentList = [
    { name: "Ayush", id: 12 },
    { name: "Sidhu", id: 13 }
];
// array of tuples
const studentTupleList = [
    ['Ayush', 12],
    ['Sidhu', 13],
];
// now lets study enum in typescript
// enum is a way to define a set of named constants. 
// In this example, we have an enum called Color with three values: Red, Green and Blue. 
// The values are assigned to the constants automatically starting from 0. 
// We can also assign specific values to the constants if we want.
var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["GREEN"] = 1] = "GREEN";
    color[color["BLUE"] = 2] = "BLUE";
})(color || (color = {}));
function getColorName(color) {
    console.log(color);
}
getColorName(color.BLUE); // here we will be restricted to use only the values defined in the enum . If we try to pass any other value , we will get compile time error. This is the main advantage of using enum over string literals.
export {};
//# sourceMappingURL=ArraysAndTuplesAndEnum.js.map