(function(global) {     //<1>
    "use strict";
    var module = {};

    var privateVariable = 42;
    var privateLogin = function(userNameValue, userPasswordValue) {
        if (userNameValue === "admin" && userPasswordValue === "secret") {
            return privateVariable;
        }
    };

    module.myConstant = 1984;
    module.login = function(userNameValue, userPasswordValue) {
        privateLogin(userNameValue, userPasswordValue);
        console.log("rest of login implementation is omitted");
    };

    module.logout = function() {
        console.log("logout implementation omitted");
    };

    global.loginModule = module;
})(window);  // <2>