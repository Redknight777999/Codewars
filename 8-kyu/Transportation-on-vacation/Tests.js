Test.describe("Regular Tests:", function () {
	Test.it("Should work for under 3 days:", function () {
		Test.assertEquals(rentalCarCost(1), 40);
		Test.assertEquals(rentalCarCost(2), 80);
	});
	Test.it("Should work for under 7 days:", function () {
		Test.assertEquals(rentalCarCost(3), 100);
		Test.assertEquals(rentalCarCost(4), 140);
		Test.assertEquals(rentalCarCost(5), 180);
		Test.assertEquals(rentalCarCost(6), 220);
	});
	Test.it("Should work for 7 or more days:", function () {
		Test.assertEquals(rentalCarCost(7), 230);
		Test.assertEquals(rentalCarCost(8), 270);
		Test.assertEquals(rentalCarCost(9), 310);
		Test.assertEquals(rentalCarCost(10), 350);
	});
});