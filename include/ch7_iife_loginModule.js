var loginModule = (function() {
    'use strict';

    var module = {};

    module.myConstant = 1984;
    module.login = function(userNameValue, userPasswordValue) {
        console.log('login implementation omitted');
    };

    module.logout = function() {
        console.log('logout implementation omitted');
    };

    return module;
})();