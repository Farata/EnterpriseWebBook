(function($) {
    describe("DOM manipulation spec", function() {
        var usernameInput;
        var passwordInput;
        beforeEach(function() { // <1>
            usernameInput = document.createElement("input"); // <2>
            usernameInput.setAttribute("type", "text");
            usernameInput.setAttribute("id", "username");
            usernameInput.setAttribute("name", "username");
            usernameInput.setAttribute("placeholder", "username");
            usernameInput.setAttribute("autocomplete", "off");

            passwordInput = document.createElement("input");
            passwordInput.setAttribute("type", "text");
            passwordInput.setAttribute("id", "password");
            passwordInput.setAttribute("name", "password");
            passwordInput.setAttribute("placeholder", "password");
            passwordInput.setAttribute("autocomplete", "off");
        });

        afterEach(function() { // <3>

        });

        it("jquey should be present", function() {
            expect($).not.toBeNull();
        });
        it("inputs should exist", function() {
            expect(usernameInput.id).toBe("username");
            expect(passwordInput.id).toBe("password");
        });
        it("should not allow login with empty username and password and return code 
            equals 0", function() {
            var result = ssc.login(usernameInput, passwordInput); // <4>
            expect(result).toBe(0);
        });
        it("should allow login with user admin and password 1234 and return code 
            equals 1", function() {
            usernameInput.value = "admin"; // <5>
            passwordInput.value = "1234";
            var result = ssc.login(usernameInput, passwordInput);
            expect(result).toBe(1);
        });
    });
})(jQuery);