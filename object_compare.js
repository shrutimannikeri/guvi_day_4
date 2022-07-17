//How to compare two json have same properties without an order

var obj1={name: "Person 1", age:5}
var obj2={age:5, name: "Person 1"}
var aKeys = Object.keys(obj1).sort();//Oject.key()--it returns the keys vaue in array like: ["name","age"]
var bKeys = Object.keys(obj2).sort();
//JSON.stringify()--helps to convert a json string

 if(JSON.stringify(aKeys) === JSON.stringify(bKeys)){
     console.log("its having same properties")
 }
 else{

    console.log("its not same properties")
 }

 //output
 //its having same properties