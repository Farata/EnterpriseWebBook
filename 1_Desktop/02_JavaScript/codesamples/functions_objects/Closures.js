(function (){                // this is an anonymous function expression

    var taxDeduction = 500;  // private context to remember 
      
      //exposed closure
      this.doTaxes=function(income, customerName) {
 	
      	var yourTax;
      	    
        if (customerName != "God Father"){
          yourTax =   income*0.05 - taxDeduction;        	
        } else{
          yourTax =   mafiaSpecial(income);  
        }
        
         console.log( "   Dear " + customerName + ", your tax is "+ yourTax);
         return yourTax;
      }
      
      //private function
      function mafiaSpecial(income){
          return income*0.05 - taxDeduction*2;
      }	
      
})();    // Self-invoked function

// calling doTaxes() in the global scope. 
doTaxes(100000, "John Smith");  // The closure remembers its context: taxDeduction=500

doTaxes(100000, "God Father");
setTimeout(doTaxes(50000, ”Mary Lou”), 2);   // Call in 2 seconds  
mafiaSpecial();                              // an error - this function is private 
