var JSA = {};

/* a node for using in a linked list */
JSA.Node = function(val) {
			
	this.GetNext = function() {
		return _next;
	};
	
	this.SetNext = function(val) {
		if (!(val instanceof JSA.Node))
			val = new JSA.Node(val);
		_next = val;
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
		if (_count == 0) {
			_head = node;
		} 
		else {
			_tail.SetNext(node);
		}
		_tail = node;
		_count++;
	};
	
	this.Dequeue = function() {
		if (_count == 0) { throw "The queueu is empty."; }
		val = _head.GetValue();
		_head = _head.GetNext();
		if (--_count == 0){
			_tail = null;
			_head = null;
		}
		return val;
	};
	
	this.GetCount = function() {
		return _count;
	};
	
	var _head = null;
	var _tail = null;
	var _count = 0;
	
	if (val) { 
		this.Enqueue(val);
	}
}