var myTaxObject = {

    taxDeduction: 400,      

    // this function takes an array and callback as params
    applyDeduction: function(someArray, someCallBackFunction){
    
        for (var i = 0; i < someArray.length; i++){
     
            // Invoke the callback
           someCallBackFunction.call(this, someArray[i]); 
        }

    }
}

var preliminaryTaxes=[1000, 2000, 3000];

// invoking applyDeduction passing an array and callback          
myTaxObject.applyDeduction(preliminaryTaxes, function(currentTax){ 
    console.log("Hello from callback. Your final tax is " + 
                                 (currentTax - this.taxDeduction));}
);