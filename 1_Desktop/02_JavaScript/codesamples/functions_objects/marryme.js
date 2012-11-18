function Person(lname, fname, age){
         this.lastName=lname;
         this.firstName=fname;
         this.age=age;
      
         this.marryMe=function(person){
         	console.log("Will you marry me " + person.firstName);
         	
         };

};
 
var p1= new Person("Smith", "Steven");
var p2= new Person("Roberts", "Julia");
p1.marryMe(p2);
