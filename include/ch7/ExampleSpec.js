describe("My function under test should", function() { // <1>
    it("return on", function() { // <2>
        // place specification code here
        //
    });
    describe("another suite", function() { // <3>
        it("spec1", function() {

        });
    });
    it("my another spec", function() { // <4>
        var truth = true;
        expect(truth).toBeTruthy();
    });
    it("2+2 = 4", function() {
        expect(2 + 2).toEqual(4); // <5>
    });
});