// arrays --> 
const student: string[] = ["Ayush" , "Sidhu" , "Shiwang"];

const students : (string | number)[]=["Ayush" , 20 , "Sidhu" , 21  , "Shiwang" , '21'];

// array of objects
interface studentType{
    name:string,
    id: number,
}

const studentList : studentType[] = [
    {name : "Ayush" , id :12} , 
    {name : "Sidhu" ,id : 13}
]


// tuples -->
// tuples are fixed length arrays with specific types for each element. 
// In this example, we have a tuple of type [string, number] which means the first element must be a string and the second element must be a number.


type studentTuple = [string , number];

// array of tuples

const studentTupleList : studentTuple[]=[
    ['Ayush' , 12],
    ['Sidhu' , 13],
]

// now lets study enum in typescript
// enum is a way to define a set of named constants. 
// In this example, we have an enum called Color with three values: Red, Green and Blue. 
// The values are assigned to the constants automatically starting from 0. 
// We can also assign specific values to the constants if we want.

enum color{
    RED,
    GREEN,
    BLUE,
}

function getColorName (color : color){
    console.log(color);
}

getColorName(color.BLUE); // here we will be restricted to use only the values defined in the enum . If we try to pass any other value , we will get compile time error. This is the main advantage of using enum over string literals.





