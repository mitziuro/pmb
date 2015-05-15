var CMBSU_CSS = {

	_Y: null,
	
	createPageDropEditor: function() {

		_Y.one(document.getElementById('T:wc_psl36::r')).setStyle('right', '36px');
		_Y.one(document.getElementById('T:wc_psl36::r')).setStyle('width', '300px');
		_Y.one(document.getElementById('T:wc_psl36::r')).setStyle('top', '-2px');
		
		_Y.one(document.getElementById('T:globNavItms')).setStyle('position', 'relative');
		_Y.one(document.getElementById('T:globNavItms')).setStyle('left', '-1px');
		
	},
	
	createScroll: function() {

		//_Y.one(document.getElementById('T:wc_psl1::t')).setStyle('position', 'relative');
		//_Y.one(document.getElementById('T:wc_psl1::c')).setStyle('position', 'relative');
		//_Y.one(document.getElementById('T:wc_psl1::c')).setStyle('height', '100%');
		//_Y.one(document.getElementById('T:wc_psl1::c')).setStyle('top', '0px');
		//_Y.one(document.getElementById('T:wc_psl1::c')).addClass('x6969');
		//_Y.one(document.getElementById('T:wc_psl1::b')).setStyle('position', 'relative');
	},
	
	createSearch: function() {
		_Y.one(document.getElementById('T:searchbox:srchFrm:goBtn')).setStyle('background-image', 'url(https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/128/search.png)');
		_Y.one(document.getElementById('T:searchbox:srchFrm:goBtn')).setStyle('background-size', 'contain');
	},
	
	createSliderSearch: function() {
		var node = _Y.one(document.getElementById('T:searchbox:srchFrm:siSrTx::content'));
		
		node.set('value', 'Cauta...');
		node.setStyle('font-style', 'italic');
					
		document.getElementById('T:searchbox:srchFrm:siSrTx::content').onfocus =  function() {
			var anim = new _Y.Anim({
					node: node,
					from: {
						width: '120px'
					},

					to: {
						 width: '265px'
					},

					duration: 1,
					iterations: 1
				});

				anim.run();
				
				if(node.getStyle('font-style') == 'italic') {
					node.set('value', '');
				}
				
				node.setStyle('font-style', 'normal');
		};
		
		
		document.getElementById('T:searchbox:srchFrm:siSrTx::content').onblur =  function() {
			var anim = new _Y.Anim({
					node: node,
					from: {
						width: '265px'
					},

					to: {
						 width: '120px'
					},

					duration: 1,
					iterations: 1
				});

				anim.run();
				
				if(node.get('value') == '') {
					node.set('value', 'Cauta...');
					node.setStyle('font-style', 'italic');
				}
				
		};

		
	},
	
	createLayout: function() {
		//document.getElementById('T:wc_psl3::c').appendChild(document.getElementById('T:wc_psl1::b'));
		document.getElementById('T:hm_pnc2').appendChild(document.getElementById('T:wc_psl1::b'));
		
	},

    init: function() {
    	
    	YUI().use('node', 'anim', 'event-focus', function(Y) {
    		_Y = Y;

    		_Y.on('domready', function () {
    			CMBSU_CSS.createLayout();
    			CMBSU_CSS.createPageDropEditor();
    			CMBSU_CSS.createSliderSearch();
    		//	CMBSU_CSS.createSearch();
    			CMBSU_CSS.createScroll();
    			
    			
    		});
    	});
    	
    }
};

CMBSU_CSS.init();