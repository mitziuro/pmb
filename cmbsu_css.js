var CMBSU_CSS = {

	_Y: null,
	
	createPageDropEditor: function() {

		_Y.one(document.getElementById('T:wc_psl36::r')).setStyle('right', '36px');
		_Y.one(document.getElementById('T:wc_psl36::r')).setStyle('width', '500px');
		
		_Y.one(document.getElementById('T:globNavItms')).setStyle('position', 'relative');
		_Y.one(document.getElementById('T:globNavItms')).setStyle('left', '-1px');
		
	},
	
	createSliderSearch: function() {

		var node = _Y.one(document.getElementById('T:searchbox:srchFrm:siSrTx::content'));
		
		node.on('focus', new function(e) {
			alert(e.target);
			var anim = new _Y.Anim({
		        node: node,
		        from: {
		            width: '170px'
		        },

		        to: {
		        	 width: '500px'
		        },

		        duration: 5,
		        iterations: 1
		    });

			anim.run();
		});
		
		node.on('blur', new function(e) {
			
			var anim = new _Y.Anim({
		        node: node,
		        from: {
		            width: '500px'
		        },

		        to: {
		        	 width: '170px'
		        },

		        duration: 5,
		        iterations: 1
		    });

			anim.run();
		});

		
	},

    init: function() {
    	
    	YUI().use('node', 'anim', 'event-focus', function(Y) {
    		_Y = Y;

    		_Y.on('domready', function () {
    			CMBSU_CSS.createPageDropEditor();
    			CMBSU_CSS.createSliderSearch();
    		});
    	});
    	
    }
};

CMBSU_CSS.init();