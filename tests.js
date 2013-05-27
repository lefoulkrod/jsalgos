module("JSA.Node Tests");
QUnit.test( "Node.SetNext should instantiate a node from val if val is not already a node.", function(assert) {
	var node = new JSA.Node("myval");
	node.SetNext("newval");
	assert.equal( node.GetNext() instanceof JSA.Node, true);
});
QUnit.test( "Node.SetNext should link this node to another node.", function(assert) {
	var node = new JSA.Node("myval");
	node.SetNext("newval");
	assert.equal( node.GetNext().GetValue(), "newval");
});
QUnit.test( "Node.GetNext should get the node for which this node is linked to.", function(assert) {
	var node = new JSA.Node("myval");
	node.SetNext("next");
	assert.equal( node.GetNext().GetValue(), "next");
});
QUnit.test( "Node.GetValue should get the value for this node.", function(assert) {
	var node = new JSA.Node("myval");
	assert.equal( node.GetValue(), "myval");
});
QUnit.test( "Node.SetValue should set the value for this node.", function(assert) {
	var node = new JSA.Node("myval");
	node.SetValue("newval");
	assert.equal( node.GetValue(), "newval");
});

module("JSA.Queue Tests");
QUnit.test( "Queue.Enqueue should increase the count by 1.", function(assert) {
	var q = new JSA.Queue();
	q.Enqueue("newval");
	assert.equal( q.GetSize(), 1);
});
QUnit.test( "Queue.Dequeue should decrease the count by 1.", function(assert) {
	var q = new JSA.Queue();
	q.Enqueue("newval");
	q.Dequeue();
	assert.equal( q.GetSize(), 0);
});
QUnit.test( "Queue.Dequeue should be FIFO.", function(assert) {
	var q = new JSA.Queue();
	q.Enqueue("1");
	q.Enqueue("2");
	q.Enqueue("3");
	assert.equal( q.Dequeue(), "1");
	assert.equal( q.Dequeue(), "2");
	assert.equal( q.Dequeue(), "3");
});
QUnit.test( "Queue.Dequeue should throw an exception if the queue is empty.", function(assert) {
	var q = new JSA.Queue();
	assert.throws(
		function() { q.Dequeue() },
		"Error thrown.");		
});
QUnit.test( "Should be able to empty and fill the queue without any issues.", function(assert) {
	var q = new JSA.Queue();
	q.Enqueue("1");
	q.Enqueue("2");
	q.Enqueue("3");
	assert.equal( q.Dequeue(), "1");
	assert.equal( q.Dequeue(), "2");
	assert.equal( q.Dequeue(), "3");
	assert.equal( q.GetSize(), 0);
	q.Enqueue("a");
	q.Enqueue("b");
	q.Enqueue("c");
	assert.equal( q.Dequeue(), "a");
	assert.equal( q.Dequeue(), "b");
	assert.equal( q.Dequeue(), "c");
	assert.equal( q.GetSize(), 0);
});

module("JSA.Stack Tests");
QUnit.test( "Stack.Push should increment the count by 1.", function(assert) {
	var stack = new JSA.Stack();
	stack.Push("val");
	assert.equal( stack.GetCount(), 1);
});
QUnit.test( "Stack.Pop should decrement the count by 1.", function(assert) {
	var stack = new JSA.Stack();
	stack.Push("val");
	assert.equal( stack.GetCount(), 1, "increased by 1");
	stack.Pop();
	assert.equal( stack.GetCount(), 0, "decreased by 1");
});
QUnit.test( "A Stack should be LIFO.", function(assert) {
	var stack = new JSA.Stack();
	stack.Push("1");
	stack.Push("2");
	stack.Push("3");
	assert.equal( stack.Pop(), "3");
	assert.equal( stack.Pop(), "2");
	assert.equal( stack.Pop(), "1");
});
QUnit.test( "Cannot Pop an empty Stack.", function(assert) {
	var stack = new JSA.Stack();
	assert.throws(
		function() { stack.Pop(); },
		"error thrown"
	);
});

module("Algorithms");
QUnit.test( "printBinaryTree should output the correct format.", function(assert) {
	var root = new JSA.BinaryTree(1, new JSA.BinaryTree(2, 4, 5), new JSA.BinaryTree(3, 6, 7));
	assert.equal( printBinaryTree(root), "1 \r\n2 3 \r\n4 5 6 7 \r\n");
});
QUnit.test( "hasAllUniqueCharacters should return true for the string 'abcdefg'", function(assert) {
	assert.equal( hasAllUniqueCharacters("abcdefg"), true);
});
QUnit.test( "hasAllUniqueCharacters should return false for the string 'abcdefa'", function(assert) {
	assert.equal( hasAllUniqueCharacters("abcdefa"), false);
});