// Constructor function Person
function Person(name, title){
	this.name=name;
	this.title=title;
	this.subordinates=[];
	
}


Person.prototype.addSubordinate=function(subordinate){
   this.subordinates.push(subordinate);
   return subordinate; 	
}



// Constructor function Employee
function Employee(name, title){
	this.name=name;
	this.title=title;
}

// Changing the inheritance of Employee
Employee.prototype = new Person();       

var mgr =  new Person("Alex", "Director");
var emp1 = new Employee("Mary", "Specialist");
var emp2 = new Employee("Joe", "VP");

mgr.addSubordinate(emp1);
mgr.addSubordinate(emp2);
console.log("mgr.subordinates[0].name " + mgr.subordinates[0].name + "mgr.subordinates[1].name " + mgr.subordinates[1].name );
