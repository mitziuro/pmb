var CMBSU_CSS = {

	createPageDropEditor: function() {
		Y.one('#T:wc_psl36::r').setStyle('right', '36px');
		
		Y.one('#T:globNavItms').setStyle('position', 'relative');
		Y.one('#T:globNavItms').setStyle('left', '-1px');
		
	},

    init: function() {
    	
    	YUI().use('node', function(Y) {
    		CMBSU_CSS.createPageDropEditor();
    	});
    	
    }
};

CMBSU_CSS.init();