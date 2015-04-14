var CMBSU_CSS = {

	_Y: null,
	
	createPageDropEditor: function() {
		alert(_Y.one('#T:wc_psl36::r'));
		alert(_Y.one('T:wc_psl36::r'));
		_Y.one('#T:wc_psl36::r').setStyle('right', '36px');
		
		_Y.one('#T:globNavItms').setStyle('position', 'relative');
		_Y.one('#T:globNavItms').setStyle('left', '-1px');
		
	},

    init: function() {
    	alert(Y.one('#T:wc_psl36::r'));
    	YUI().use('node', function(Y) {
    		_Y = Y;
    		alert(Y.one('#T:wc_psl36::r'));
    		_Y.on('domready', function () {
    			CMBSU_CSS.createPageDropEditor();
    		});
    	});
    	
    }
};

CMBSU_CSS.init();