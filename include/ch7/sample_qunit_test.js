(function($) {
    module('SaveSickChild: login component test', { // <1>
        setup: function() { // <2>
            // test setup code goes here
        },
        teardown: function() { // <3>
            // test cleanup code goes here
        }
    });
    test('jquery is here', function() { // <4>
        ok($, "yes, it's here");
    });
    test("2 add 2 equals 4", function() {
        ok(2 + 2 === 4, "Passed!"); // <5>
    });
    test('2 add 2 not equals 5', function() {
        notEqual(2 + 2, 5, "failed"); // <6>
    });
}(jQuery)); // <7>