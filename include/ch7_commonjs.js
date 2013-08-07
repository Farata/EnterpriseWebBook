/*jslint node: true */
"use strict";
var loginModule = {};
var privateVariable = 42;

var ldapLogin = require("login/ldap");      // <1>
var otherImportantDep = require("modules/util/strings"); // <1>

var privateLogin = function(userNameValue, userPasswordValue) {
    if (userNameValue === "admin" && userPasswordValue === "secret") {
        ldapLogin.login(userNameValue, userPasswordValue);
        return privateVariable;
    }
};

loginModule.myConstant = 1984;
loginModule.login = function(userNameValue, userPasswordValue) {
    privateLogin(userNameValue, userPasswordValue);
    console.log("login implementation omitted");
};

loginModule.logout = function() {
    console.log("logout implementation omitted");
};

exports.login = loginModule;        // <2>
//module.exports = loginModule      // <3>

loginModule.printMetadata = function(){
    console.log(module.id);     // <3>
    console.log(module.uri);
};