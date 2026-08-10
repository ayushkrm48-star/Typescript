class Student{
    study(){
        console.log("Student is studying");
    }
}

class Teacher{
    teach(){
        console.log("Teacher is teaching");
    }
}


function doWork(person : Student | Teacher){
    if(person instanceof Student){
        person.study();
    }
    else {
        person.teach();
    }
}


doWork(new Student());

function orderFood(food : string | number){
    if(typeof food === "string"){
        console.log(`Ordering food: ${food}`);
    }
    else{
        console.log(`Ordering food with ID: ${food}`);
    }
}

orderFood("Pizza");
orderFood(12345);

// type keyword se hum custom object types define kar sakte hain.

type masalaChai = {
    type : "masala",
    sugar: boolean,
}


type shape = {
    type:"circle" | "sqaure" | "rectangle";
    radius?:number;
    length?:number;
    breadth?:number;
}

function calculateArea(shape:shape){
    if(shape.type ==="circle"){
        return Math.PI * shape.radius! * shape.radius!;
    }
    else if(shape.type === "sqaure"){
        return shape.length! * shape.length!;
        // shape.length is definitely NOT undefined
    }
    else{
        return shape.length! * shape.breadth!;
    }   
}

console.log(calculateArea({type : 'rectangle', length : 10 , breadth : 10}));

