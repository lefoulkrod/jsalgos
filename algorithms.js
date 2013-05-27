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

/* Determine if a string has only unique characters. */
function hasAllUniqueCharacters(word) {

	if ( !word ) { throw "word must be a string" };
	 
	word = new String(word);
	var hash = {};
	for (var i = 0; i < word.length; i++) {
		if ( hash.hasOwnProperty( word[i] ) ) {
			return false;
		}
		else { hash[ word[i] ] = null; }
	}
	return true;
}

