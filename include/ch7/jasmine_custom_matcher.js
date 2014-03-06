beforeEach(function() {
    'use strict';
    var customMatcher = {
        toBeSecretAgent: function() {
            return {
                compare: function(actual, expected) { // 1
                    if (expected === undefined) {
                        expected = '';
                    }
                    var result = {}; // 2
                    var agentList = [
                        'James Bond',
                        'Ethan Hunt',
                        'Jason Bourne',
                        'Aaron Cross',
                        'Jack Reacher'
                    ];
                    result.pass = agentList.indexOf(actual) !== -1; // 3
                    if (result.pass) { // 4
                        result.message = actual + ' is a supper agent'; // 5
                    } else {
                        result.message = actual + ' is not a secret agent';
                    }
                    return result;
                }
            };
        }
    };

    jasmine.addMatchers(customMatcher);
});