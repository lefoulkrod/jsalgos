module("Binary Search Test");

QUnit.test( "binarySearch should find the index of the given value in the provided input array.", function(assert) {
	var val = 5, input = [1,2,3,4,5,6,7,8,9,10,11,12,13];

	var output = binarySearch(input, val);
	
	assert.equal( output, 4);
});

QUnit.test( "binarySearch should return -1 if the value being searched for isnt in the array.", function(assert) {
	var val = 5, input = [1,2,3,4,6,7,8,9,10,11,12,13];

	var output = binarySearch(input, val);
	
	assert.equal( output, -1);
});