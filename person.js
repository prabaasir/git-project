//Momdule Wrapper function
// (function(exports , require ,module ,_filenmae,_dirname){

// })


// console.log(_dirname,_filename);
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}
module.exports=Person;