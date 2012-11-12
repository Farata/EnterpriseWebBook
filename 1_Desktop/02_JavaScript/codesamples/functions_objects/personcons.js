// 1. Function Constructor Person
function Person(name, title){
	this.name=name;
	this.title=title;
	this.subordinates=[];
}

//2. Add a method available to all instances

Person.prototype.addSubordinate=function(person){
   this.subordinates.push(person);
}

//3.  Function Constructor Employee
function Employee(name, title){
	this.name=name;
	this.title=title;
}

//3.  Function Constructor Contractor
function Contractor(name, rate){
	this.name=name;
	this.rate=rate;
}


// 4. Changing the inheritance of Employee
Employee.prototype = new Person();       // changing parent
Employee.prototype.constructor=Employee;

Contractor.prototype.increaseRate=function (){
	this.rate*=1.1;  // Increase rate by 10%
}


var contr1=new Contractor("Joe", 50);

// Right to hire
Contractor.prototype=Employee.prototype;
Contractor.prototype.constructor=Employee;  // with and without this the title values goes in the var rate

var contr2=new Contractor("Bill", "Junior Developer");


var mgr =  new Person("Alex", "Director");

var emp1 = new Employee("Mary", "Specialist");
var emp2 = new Employee("Joe", "VP");

mgr.addSubordinate(emp1);


console.log("mgr.subordinates.length is " + mgr.subordinates.length);

console.log("mgr.subordinates[0] is " + mgr.subordinates[0].name + "," + mgr.subordinates[0].title);
console.log("emp1.subordinates.length is " + emp1.subordinates.length);

