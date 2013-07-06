(function(global) {
    var module = {};

    module.myConstant = 1984;
    module.login = function(userNameValue, userPasswordValue) {
        console.log("login implementation omitted");
    };

    module.logout = function() {
        console.log("logout implementation omitted");
    };

    global.loginModule = module;
})(window);