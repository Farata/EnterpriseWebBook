(function(root, factory) {
    if (typeof define == "function" && define.amd) { // <1>
        define(['login'], factory);
    } else {
        root.ssc = factory(root.login); // <2>
    }
}(this, function(login) { // <3>
    return {
        myConstant: 1984,
        login: function(userNameValue, userPasswordValue) {
            console.log("login implementation omitted");
        },
        logout: function() {
            console.log("logout implementation omitted");
        }
    };
}));