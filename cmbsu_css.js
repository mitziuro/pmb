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
		
		//top
		document.getElementById('T:globalContainer').style.paddingBottom = '14px'; 
		
		
		document.getElementById('T:pgl1').insertBefore(document.getElementById('T:wc_psl1::t'), document.getElementById('T:pgl1').firstChild);    
		document.getElementById('T:pgl2').style.paddingTop = '114px';
		
		document.getElementById('T:pgl1').insertBefore(document.getElementById('T:wc_psl3::t'), document.getElementById('T:wc_psl1::t'));
		document.getElementById('T:wc_psl3::t').style.top = '65px';
		document.getElementById('T:wc_psl3::t').className += " div_menu";
		document.getElementById('T:mb1::oc').style.position = 'relative';
		document.getElementById('T:mb1::oc').style.top = '2px';
		
		document.getElementById('T:wc_psl1::c').style.top  = '-62px'; 
		
		document.getElementById('T:pgl1').insertBefore(document.getElementById('T:wc_psl369'), document.getElementById('T:wc_psl3::t'));
		document.getElementById('T:wc_psl369').style.top = '95px';
		
		//content
		document.getElementById('T:hm_pnc2').style.padding = '';
		
		document.getElementById('T:contentBody').style.bottom = '-1px';
		
		//searchbox
		document.getElementById('T:searchbox').style.position = 'relative';
		document.getElementById('T:searchbox').style.top = '2px';
		
		//footer
		var div = document.createElement("div");
		document.getElementById('T:pgl1').appendChild(div);
		
		document.getElementById('T:pgl2').style.minHeight= '550px';
		
		div.innerHTML = '<div class="footer_div"> \
		<table summary="" class="footer_table x25t x1a" style="text-align:center;" border="0" cellpadding="0" cellspacing="0">\
	        <tr>\
	            <td>\
	                <img class="xjd footer_image" src="https://raw.githubusercontent.com/mitziuro/pmb/master/sigla%20-%20PMB.gif"/>\
			  		<br/>\
					<img class="xjd footer_image" src="https://raw.githubusercontent.com/mitziuro/pmb/master/sabif-fb_inverted.png"/>\
	            </td>\
	            <td style="vertical-align: top;">\
	              \<div class="footer_text">\
						<div class="footer_div_">\
							<a href="http://pmb.ro">Primaria Municipiului Bucuresti</a>\
						</div>\
						<div class="footer_div_">\
							<a href="http://www.smurd.ro">Serviciul Mobil de Urgenta, Reanimare si Descarcerare</a> \
						</div>\
						<div class="footer_div_"> \
							<a href="http://sabif.ro">Serviciului de Ambulanta Bucuresti-Ilfov</a>\
						</div>\
						<div class="footer_div_">\
							<a href="http://isubucuresti.ro">Inspectoratul pentru Situatii de Urgenta "Dealul Spirii" al Municipiului Bucuresti</a> \
						</div>\
				</div>\
	            </td>\
	            <td>\
	                <img class="xjd footer_image" src="https://raw.githubusercontent.com/mitziuro/pmb/master/SMURD_logo.png"/>\
					<br/>\
					<img class="xjd footer_image" src="https://raw.githubusercontent.com/mitziuro/pmb/master/sigla-isumb.png"/>\
	            </td>\
	        </tr>\
	   </table></div>';
		
		
		
		
	},

	createLayoutIE: function() {
		document.getElementById('T:pcust2::content').style.overflow = 'hidden';
	},
	
    init: function() {
    	
    	YUI().use('node', 'anim', 'event-focus', function(Y) {
    		_Y = Y;

    		_Y.on('domready', function () {
    			CMBSU_CSS.createLayout();
    			CMBSU_CSS.createLayoutIE();
    			CMBSU_CSS.createPageDropEditor();
    			CMBSU_CSS.createSliderSearch();
    		//	CMBSU_CSS.createSearch();
    			CMBSU_CSS.createScroll();
    			
    			
    		});
    	});
    	
    }
};

CMBSU_CSS.init();