var myTaxObject = {    

    // this function takes an array and callback as parameters
    applyDeduction: function(someArray, someCallBackFunction){
    
        for (var i = 0; i < someArray.length; i++){
     
            // Invoke the callback
           someCallBackFunction.call(this, someArray[i]); 
        }

    }
}

// array
var preliminaryTaxes=[1000, 2000, 3000];


var taxHandler = function (taxDeduction){
	
// tax handler closure
	return function(currentTax){ 
                   console.log("Hello from callback. Your final tax is " + 
                   (currentTax - taxDeduction));
                };	
}


// invoking applyDeduction passing an array and callback-closure          
myTaxObject.applyDeduction(preliminaryTaxes, taxHandler);