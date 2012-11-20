function Person(name, title){
	this.name=name;
	this.title=title;
	this.subordinates=[];
}


function Employee(name, title){
	this.name=name;
	this.title=title;
}

// All instances of Employee will extend Person
Employee.prototype=new Person();

var emp=new Employee("Mary", "Specialist");

console.log(emp);

//Create an instance of Person and add property dependents 
var p=new Person();
p.dependents=1;


var emp2=new Employee("Joe", "Father");
//This employee will have property dependents
emp2.__proto__=p;

console.log("The number of Employee's dependents "+ emp2.dependents);