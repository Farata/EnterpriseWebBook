// Defining a function expession 
var Tax = function(income, state){
	this.income=income;
	this.state=state;
	
	this.calcTax=function(){
		var tax=income*0.05;
		console.log("Your calculated tax is " + tax)
		return tax;
	}
};


// Defining a mixin
var TaxMixin = function () {};

TaxMixin.prototype = {

  mafiaSpecial: function(originalTax){
    console.log("Mafia special:" + (originalTax - 1000));
  },

  drugCartelSpecial: function(originalTax){
     console.log("Drug Cartel special:" + (originalTax - 3000));
  }		

};

// this function can blend TaxMixin into tax
function blend( mainDish, spices ) {

  for ( var methodName in spices.prototype ) {
      mainDish.prototype[methodName] = spices.prototype[methodName];
  }
}

// Blend the spices with the main dish
blend( Tax, TaxMixin );

// Create an instant of Tax 
var t = new Tax(50000, "NY");

var rawTax = t.calcTax();

// invoke a freshly blended method
t.mafiaSpecial(rawTax);
