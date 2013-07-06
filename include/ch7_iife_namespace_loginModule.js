(function(global) {

    var ssc = global.ssc;
    if (!ssc) {
        ssc = {};
        global.ssc = ssc;
    }

    var module = ssc.loginModule = {};

    module.myConstant = 1984;
    module.login = function(userNameValue, userPasswordValue) {
        console.log("login implementation omitted");
    };

    module.logout = function() {
        console.log("logout implementation omitted");
    };
})(window);