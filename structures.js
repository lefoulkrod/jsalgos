var JSA = {};

/* a node for using in a linked list */
JSA.Node = function(val) {
			
	this.GetNext = function() {
		return _next;
	};
	
	this.SetNext = function(val) {
		_next = val instanceof JSA.Node ? val : new JSA.Node(val);
	};
	
	this.GetValue = function() {
		return _val;
	};
	
	this.SetValue = function(val) {
		_val = val;
	};
	
	var _next = null;
	var _val = null;
	this.SetValue(val);
}

/* a queue built with a linked list */
JSA.Queue = function(val) {
	
	this.Enqueue = function(val) {
		var node = new JSA.Node(val);
		if (_size == 0) {
			_head = node;
		} 
		else {
			_tail.SetNext(node);
		}
		_tail = node;
		_size++;
	};
	
	this.Dequeue = function() {
		if (_size == 0) { throw "Cannot dequeue an empty queue."; }
		val = _head.GetValue();
		_head = _head.GetNext();
		if (--_size == 0){
			_tail = null;
			_head = null;
		}
		return val;
	};
	
	this.GetSize = function() {
		return _size;
	};
	
	var _head = null;
	var _tail = null;
	var _size = 0;
	
	if (val) { 
		this.Enqueue(val);
	}
}

/* a stack implemented with a linked list */
JSA.Stack = function(val) {
	
	this.Push = function(val) {
		var node = new JSA.Node(val);
		if (_count > 0) {
			node.SetNext(_head);
		} 
		_head = node;
		_count++;
	}
	
	this.Pop = function() {
		if (_count == 0) {
			throw "cannot Pop an empty stack";
		}
		var val = _head.GetValue();
		_head = _head.GetNext();
		if(--_count == 0) {
			_head = null;
		}
		return val;
	}
	
	this.GetCount = function() {
		return _count;
	}
	
	if (val) {
		this.Push(val);
	}
	var _head = null;
	var _count = 0;
}

/* a binary tree */
JSA.BinaryTree = function(val, left, right) {
	
	this.GetLeft = function() { return _left; }
	this.GetRight = function() { return _right; }
	this.GetValue = function() { return _val; }
	/* set the left child, creating a new BinaryTree instance if the argument is not already an instance. */
	this.SetLeft = function(left) {
		_left = left instanceof JSA.BinaryTree ? left : left && new JSA.BinaryTree(left);
	}
	/* set the right child, creating a new BinaryTree instance if the argument is not already an instance. */
	this.SetRight = function(right) {
		_right = right instanceof JSA.BinaryTree ? right : right && new JSA.BinaryTree(right);
	}
	
	var _val = null; 
	var _left = null; 
	var _right = null;
	
	_val = val;
	this.SetLeft(left);
	this.SetRight(right);
}