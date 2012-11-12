function Person(name, title){
	this.name=name;
	this.title=title;
	this.subordinates=[];
}


function Employee(name, title){
	this.name=name;
	this.title=title;
}

Employee.prototype=new Person();
var emp=new Employee("Mary", "Specialist");

console.log("Created Employee "+ emp);
