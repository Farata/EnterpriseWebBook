function Person(name, title){
	this.name=name;
	this.title=title;
	this.subordinates=[];
}


function Employee(name, title){
    Person.call(this,name,title);  
}

var emp=new Employee("Mary", "Specialist");

console.log("Created Employee "+ emp);
