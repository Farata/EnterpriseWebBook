// Fuunction Constructor Manager
function Manager(name, title){
	this.name=name;
	this.title=title;
	this.subordinates=[];
}

Manager.prototype.addSubordinate=function(){
   var subordinate=new Employee(this.name, this.title);
   this.subordinates.push(subordinate);
   return subordinate; 	
}

// Fuunction Constructor Employee
function Employee(name, title){
	this.name=name;
	this.title=title;
}

// Changing the inheritance of Employee
Employee.prototype = new Manager();       // changing parent
Employee.prototype.constructor=Employee;


var mgr =  new Manager("Alex", "Director");
var emp1 = new Employee("Mary", "Specialist");
var emp2 = new Employee("Joe", "VP");

emp1.addSubordinate();
emp2.addSubordinate(emp2);
console.log("mgr.subordinates.length is " + mgr.subordinates.length);
