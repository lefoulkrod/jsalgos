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
	
	var nodes = [root];
	var output = '';
	while (nodes.length > 0) {
		var children = [];
		for (var i = 0; i < nodes.length; i++) {
			output += nodes[i].GetValue() + ' ';
			nodes[i].GetLeft() && children.push(nodes[i].GetLeft());
			nodes[i].GetRight() && children.push(nodes[i].GetRight());
		}
		output += "\r\n";
		nodes = children;
	}
	return output;
}