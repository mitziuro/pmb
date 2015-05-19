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
		document.getElementById('T:globalContainer').style.paddingBottom = '11px'; 
		document.getElementById('T:globalContainer').style.left = '-2px'; 
		document.getElementById('T:globalContainer').style.paddingLeft = '2px'; 
		
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
		
		//footer copyright
		var footer = document.getElementById('T:pt_pgl9').firstChild.firstChild.firstChild.firstChild.innerHTML;
		
		div.innerHTML = '<div class="footer_div"> \
		<table summary="" class="footer_table x25t x1a" style="text-align:center;" border="0" cellpadding="0" cellspacing="0">\
	        <tr>\
	            <td class="footer_td">\
					<a href="http://pmb.ro">\
	                	<img class="xjd footer_image" src="' + CMBSU_URL + 'sigla%20-%20PMB.gif"/>\
			  		</a>\
					<a href="http://www.smurd.ro">\
			        	<img style="position:relative;left:15px;" class="xjd footer_image" src="' + CMBSU_URL + 'SMURD_logo.png"/>\
					</a>\
					<br/>\
					<a href="http://sabif.ro">\
						<img class="xjd footer_image" src="' + CMBSU_URL + 'sabif-fb_inverted.png"/>\
	            	</a>\
						<a href="http://isubucuresti.ro">\
						<img class="xjd footer_image" src="' + CMBSU_URL + 'sigla-isumb.png"/>\
					</a>\
				</td>\
	            <td style="vertical-align: top;">\
	              \<div class="footer_text">\
						<div class="footer_div_">\
							<a href="http://pmb.ro">Primaria Municipiului Bucuresti</a>\
						</div>\
						<div class="footer_div_">\
							<a href="http://www.smurd.ro">Serviciul Mobil de Urgenta, Reanimare si Descarcerare</a> \
						</div>\
						<div style="height:70px;"></div>\
						<div class="footer_div_"> \
							<a href="http://sabif.ro">Serviciul de Ambulanta Bucuresti-Ilfov</a>\
						</div>\
						<div class="footer_div_">\
							<a href="http://isubucuresti.ro">Inspectoratul pentru Situatii de Urgenta "Dealul Spirii" al Municipiului Bucuresti</a> \
						</div>\
				</div>\
						<div id="copyRght" class="footerCopy">' + footer + '\
						</div>\
	            </td>\
	        </tr>\
	   </table></div>';
	
		document.getElementById('f1').insertBefore(document.getElementById('T:pgl1'), document.getElementById('f1').firstChild);    
		document.getElementById('f1').removeChild(document.getElementById('T:globalContainer'));
		document.getElementById('T:pgl1').style.overflow = '';
		document.getElementById('T:wc_psl369').style.height = '0px';
	
		
	},
	
	createLayoutIE: function() {
		document.getElementById('T:pcust2::content').style.overflow = 'hidden';
	},
	
	createFrames: function() {
		 	var frames = document.getElementsByClassName("div-pmb-iframe");
		 	var _loc = document.location;
		 	var children = null;
	    
		    _loc = _loc.toString().split('?').length == 2 ? _loc.toString().split('?')[1] : null;
		    
		    for(var i in frames) {
		       if(frames[i].innerHTML == null) {
		           continue;
		       }
		       
		       frames[i].innerHTML = frames[i].innerHTML.replace('pmb-iframe', 'iframe');
		       
		       if(_loc == null) {
		            continue;
		       }
		  
		       children = frames[i].childNodes;
		       for(var j in children) {
		       
		          
		       
		           if(children[j].tagName == 'iframe' || children[j].tagName == 'IFRAME') {
		               children[j].src = children[j].src + '?' + _loc;
		           }
		       }
		       
		       
		       
		       children = frames[i].children;       
		    }
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
    	
    	CMBSU_CSS.createFrames();
     	CMBSU_ALERT.init();
    	
    }
};

CMBSU_CSS.init();