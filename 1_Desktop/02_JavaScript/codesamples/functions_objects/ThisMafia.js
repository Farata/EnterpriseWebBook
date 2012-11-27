// 300
var taxDeduction=300;      // global variable

var myTaxObject = {

    taxDeduction: 400,    // object property   

    doTaxes: function() {
         this.taxDeduction += 100;
    
         var mafiaSpecial= function(){
           console.log( "Will deduct " + this.taxDeduction);
         }
         
         mafiaSpecial();  // invoking as a function
    }
}
          
myTaxObject.doTaxes();  //invoking method doTaxes 


// 500
var taxDeduction=300;      // global variable

var myTaxObject = {

    taxDeduction: 400,    // object property   

    doTaxes: function() {
    var thisOfMyTaxObject=this;
         this.taxDeduction += 100;
    
         var mafiaSpecial= function(){
           console.log( "Will deduct " + thisOfMyTaxObject.taxDeduction);
         }
         
         mafiaSpecial();  // invoking as a function
    }
}
          
myTaxObject.doTaxes();  //invoking method doTaxes 

// Not a function
var taxDeduction=300;      // global variable

var myTaxObject = {

    taxDeduction: 400,    // object property   

    doTaxes: function() {
         this.taxDeduction += 100;
    
         var mafiaSpecial= function(){
           console.log( "Will deduct " + this.taxDeduction);
         }
         
         this.mafiaSpecial();  // trying to apply object's scope
    }
}
          
myTaxObject.doTaxes();  //invoking method doTaxes 


