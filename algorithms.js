/* 
 * Given a binary tree, print out the tree in level order (ie, from left to right, level by level).  
 * Output a newline after the end of each level.
 * For example, the input: 
 *                           3
 *                          / \
 *                         9   20
 *                            /  \
 *                           15   7
 * Would produce the following output:
 *                            3
 *                            9 20
 *                            15 7
 */
function printBinaryTree(root) {
	
	// I can't print here so I'll return the pretty output as a string.
	
	if (!root) return ""; // minimal error checking, just return an empty string if the root is not valid.
	
	var nodes = new JSA.Queue(root);
	var output = '';
	while (nodes.GetSize() > 0) {
		var nodesOnCurrentLevel = nodes.GetSize();
		for (var i = 0; i < nodesOnCurrentLevel; i++) {
			var node = nodes.Dequeue();
			output += node.GetValue() + ' ';
			if ( node.GetLeft() ) { nodes.Enqueue(node.GetLeft()) };
			if ( node.GetRight() ) { nodes.Enqueue(node.GetRight()) };
		}
		output += "\r\n";
	}
	return output;
}

/* Determine if a string has only unique characters. Assume word will contain only [a-zA-Z] */
function hasAllUniqueCharacters(word) {

	if ( !word ) { throw "word must be a string" };
	 
	word = new String(word);
	if (word.length > 52) { return false; } // there are only 52 unique characters allowed in the set
	var hash = {};
	for (var i = 0; i < word.length; i++) {
		if ( hash.hasOwnProperty( word[i] ) ) {
			return false;
		}
		else { hash[ word[i] ] = null; }
	}
	return true;
}

/* Determine if a string is an anagram of another string. */
function isAPermutation(word1, word2) {

	if ( !(word1 || word2) ) { throw "word1 and word2 are required"; }
	if (word1.length != word2.length) { return false; } //cannot be a permutation if the words arent the same lenght
	
	var hash = {};
	for (var i = 0; i < word1.length; i++) {
		var letter = word1[i];
		if (!hash[letter]) {
			hash[letter] = 1;
		} else {
			hash[letter]++;
		}
	}
	for (var i = 0; i < word2.length; i++) {
		var letter = word2[i];
		var count = hash[letter];
		if (!count) {
			return false;
		} 
		if (count < 1) {
			return false;
		}
		count--;
	}
	
	return true;
}

/* Remove duplicates from an unsorted linked list. */
function removeDuplicates(head) {
	
	if (!head) { throw "invalid argument, head must be a node instance"; }
	if (!head.GetNext()) { return head; } // if head is the only node, there are no duplicates
	
	var hash = {};
	hash[ head.GetValue() ] = null; // seed the hash with the head's value
	var previous = head;
	var current = head.GetNext();
	while (current) {
		if ( hash.hasOwnProperty( current.GetValue() ) ) {
			// found a duplicate, remove it
			previous.SetNext( current.GetNext() || null);
		} else {
			// this one is not a duplicate, add it to the hash and advance the previous pointer
			hash[ current.GetValue() ] = null;
			previous = current;
		}
		current = current.GetNext();
	}
	return head;
}