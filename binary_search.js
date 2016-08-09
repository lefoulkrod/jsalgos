var binarySearch = function (input, search) {
	var min = 0, max = input.length - 1, guess = Math.ceil( (max + min) / 2);

	while(true) {
		if (input[guess] === search) {
			return guess;
		};		

		if (input[guess] < search )
		{
			min = guess + 1;
		}

		if (input[guess] > search) {
			max = guess - 1;
		};

		if (min > max || max < min) {
			return -1;
		};

		guess = Math.ceil((max + min) / 2);
	}
}