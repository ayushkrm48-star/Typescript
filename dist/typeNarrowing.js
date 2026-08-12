class Student {
    study() {
        console.log("Student is studying");
    }
}
class Teacher {
    teach() {
        console.log("Teacher is teaching");
    }
}
function doWork(person) {
    if (person instanceof Student) {
        person.study();
    }
    else {
        person.teach();
    }
}
doWork(new Student());
function orderFood(food) {
    if (typeof food === "string") {
        console.log(`Ordering food: ${food}`);
    }
    else {
        console.log(`Ordering food with ID: ${food}`);
    }
}
orderFood("Pizza");
orderFood(12345);
function calculateArea(shape) {
    if (shape.type === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else if (shape.type === "sqaure") {
        return shape.length * shape.length;
        // shape.length is definitely NOT undefined
    }
    else {
        return shape.length * shape.breadth;
    }
}
console.log(calculateArea({ type: 'rectangle', length: 10, breadth: 10 }));
export {};
//# sourceMappingURL=typeNarrowing.js.map