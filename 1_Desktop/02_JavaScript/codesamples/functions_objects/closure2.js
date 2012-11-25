function prepareTaxes(studentDeductionAmount) {
	
	return function (income) {
	   return income*0.05 - studentDeductionAmount;	
	};
	
}

var doTaxes = prepareTaxes(300);
var yourTaxIs = doTaxes(10000);
console.log("You tax is " + yourTaxIs);
