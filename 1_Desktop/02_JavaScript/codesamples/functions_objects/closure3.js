// Constructor function
function Person(name){
	
	this.name = name;
	
}

// Declaring a method that returns closure
Person.prototype.doTaxes= function(){

    var taxDeduction = 500;  

      //private function
      function mafiaSpecial(income){
          return income*0.05 - taxDeduction*2;
      }	
      
      //the code of this function is returned to the caller
      return function(income) {
 	
      	var yourTax;
      	    
        if (this.name != "Tony Soprano"){
          yourTax =   income*0.05 - taxDeduction;        	
        } else{
          yourTax =   mafiaSpecial(income);  
        }
        
         console.log( "My dear " + this.name + ", your tax is "+ yourTax);
         return yourTax;
      }
}(); // important parentheses!

//Using closure
var p1=new Person("John Smith");
var result1 = p1.doTaxes(100000);                          

var p2=new Person("Tony Soprano");
var result2 = p2.doTaxes(100000);
