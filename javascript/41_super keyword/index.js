/*
super = Super keyword reference to the parent class (super class)
        It is very similar to "this" keyword
        One can use a super classes in constructor and methods
*/

class Person
{
    constructor(name,age)
    {
        this.name= name
        this.age= age
    }
    hello()
    {
        console.log("Hello",this.name);
        console.log("You are",this.age,"years old.");
    }
}

class Student extends Person
{
    constructor(name,age,gpa)
    {
        super(name,age);
        this.gpa= gpa;
    }
    hello()
    {
        super.hello()
        console.log("Your gpa is",this.gpa)
    }
}

class Teacher extends Person
{
    constructor(name,age,classSize)
    {
        super(name,age)
        this.classSize= classSize
    }
    hello()
    {
        super.hello()
        console.log("your class size is",this.classSize)
    }
}

let student = new Student("Cary Grant", 21, 5.0);
let teacher = new Teacher("Bob The Builder", 54, 69);

student.hello()
console.log("*********************")
teacher.hello()
