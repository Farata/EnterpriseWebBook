(function(root, factory) {
    "use strict";
    if (typeof define === "function" && define.amd) { // <1>
        define(["login"], factory);
    } else {
        root.ssc = factory(root.login); // <2>
    }
}(this, function(login) { // <3>
    "use strict";
    return {
        myConstant: 1984,
        login: function(userNameValue, userPasswordValue) {
            console.log("login for " + userNameValue + " and " + userPasswordValue);
        },
        logout: function() {
            console.log("logout implementation omitted");
        }
    };
}));