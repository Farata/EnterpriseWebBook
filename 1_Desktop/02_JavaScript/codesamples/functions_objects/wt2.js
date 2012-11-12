function Person(lname, fname, age){
         this.lastName=lname;
         this.firstName=fname;
         this.age=age;
      
         this.marryMe=function(person){
         	console.log("Will you marry me " + person.lastName);
         	
         };

 };
 
var p1= new Person("Fain", "Yakov");var p2= new Person("Roberts", "Julia");
p1.marryMe(p2);
