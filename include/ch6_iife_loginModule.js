var loginModule = (function() {       <1>
    "use strict";

    var module = {};
    var privateVariable = 42;

    var privateLogin = function(userNameValue, userPasswordValue) {       <2>
        if (userNameValue === "admin" && userPasswordValue === "secret") {
            return privateVariable;
        }
    };

    module.myConstant = 1984;
    module.login = function(userNameValue, userPasswordValue) {
        privateLogin(userNameValue, userPasswordValue);
        console.log("login implementation omitted");
    };

    module.logout = function() {
        console.log("logout implementation omitted");
    };

    return module;
})();