var p = { lastName: "Roberts",
                firstName: "Julia", 
                age: 42,
                phone:{
                      type: "work",
                      numb: "212-555-1212"
                 }
            };
console.log("Call " + p.firstName + " at " + p.phone.type + " " + p.phone.numb );            
          
// array
var p = { lastName: "Roberts",
                firstName: "Julia", 
                age: 42,
                phones:[{
                      type: "work",
                      numb: "212-555-1212"
                 },
                 {
                      type: "home",
                      numb: "718-211-8987"

                 }]
            };
console.log("Call " + p.firstName + " at " + p.phones[1].type + " " + p.phones[1].numb );            
            
var p = { lastName: "Roberts",
                firstName: "Julia", 
                age: 42,
                phones:[{
                      type: "work",
                      numb: "212-555-1212"
                 },
                 {
                      type: "home",
                      numb: "718-211-8987"

                 }],
                makeAppointment: function(){ 
                    console.log("Yakov wants to see  " + this.firstName + ". He'll call at " + this.phones[0].numb);
                }
            };
             
p.makeAppointment();



            

// Code snippet1 for Walkthrough 2-1
// Code snippet 1 
var p = { lastName: "Roberts",
                firstName: "Julia", 
                age: 42,
                phones:{
                      work: "212-555-1212",
                      cell:    "212-000-0000"
                 },
                makeAppointment: function(){ 
                    alert("Yakov wants to see  " + this.firstName + ". He'll call at " + this.phones.work);
                }
            };

//p.makeAppointment(); 

// Code snippet 2 
var mixedArray=[
"Hello",
prompt("Enter your name", "type your name here")
]

alert(mixedArray.join(","));


var customers = ['first', 'second', 'third'];
customers.every()

// Code snippets for Walkthrough 2-2

// Constructor Function
function Person(lname, fname, age){
         this.lastName=lname;
         this.firstName=fname;
         this.age=age;
}
           
    // Creating 2 Person objects         
    var p1 = new Person("Roberts","Julia", 42);

    var p2 = new Person("Smith", "Joe", 34); 

console.log(p1.lastName);
console.log(p2.lastName);
// Using prototype
function Person(lname, fname, age){
         this.lastName=lname;
         this.firstName=fname;
         this.age=age;
}
           
   
    Person.prototype.sayHello=function(){
        return "Hello " + this.firstName;
    }     

 // Creating 2 Person objects         
    var p1 = new Person("Roberts","Julia", 42);

    console.log(p1.sayHello());


// Who's your Daddy?

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

