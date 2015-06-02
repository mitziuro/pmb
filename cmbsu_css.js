

var CMBSU_CSS = {

	_ANIMATION_SPINLOCK: 0,
	
	createPageDropEditor: function() {

		document.getElementById('T:wc_psl36::r').style.right = '36px';
		document.getElementById('T:wc_psl36::r').style.width = '300px';
		document.getElementById('T:wc_psl36::r').style.top = '-2px';
		
		document.getElementById('T:globNavItms').style.position = 'relative';
		document.getElementById('T:globNavItms').style.left = '-1px';
		
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
	//	_Y.one(document.getElementById('T:searchbox:srchFrm:goBtn')).setStyle('background-image', 'url(https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/128/search.png)');
	//	_Y.one(document.getElementById('T:searchbox:srchFrm:goBtn')).setStyle('background-size', 'contain');
	},
	
	createSliderSearch: function() {
		/*var node = _Y.one(document.getElementById('T:searchbox:srchFrm:siSrTx::content'));
		
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
				
		};*/

		
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
						<div style="position:relative;top:69px;">\
							<div class="footer_div_"> \
								<a href="http://sabif.ro">Serviciul de Ambulanta Bucuresti-Ilfov</a>\
							</div>\
							<div class="footer_div_">\
								<a href="http://isubucuresti.ro">Inspectoratul pentru Situatii de Urgenta "Dealul Spirii" al Municipiului Bucuresti</a> \
							</div>\
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
		document.getElementById('T:wc_psl369').style.height = '10px';
	
		
	},
	
	createLayoutIE: function() {
		document.getElementById('T:pcust2::content').style.overflow = 'hidden';
	},
	
	
	createLoader: function(pmbDiv, height) {
		
		if(pmbDiv.childNodes.length > 1) {
			alert(pmbDiv.childNodes.length);
			return;
		}
		
		var div = document.createElement("div");
		
		div.className = 'loadingDiv';
		div.innerHTML = '<style type="text/css">\
							\
						  /* WebKit and Opera browsers */\
						  @-webkit-keyframes spinner {\
						    from { -webkit-transform: rotateY(0deg);   }\
						    to   { -webkit-transform: rotateY(-360deg); }\
						  }\
						\
						  /* all other browsers */\
						  @keyframes spinner {\
						    from {\
						      -moz-transform: rotateY(0deg);\
						      -ms-transform: rotateY(0deg);\
						      transform: rotateY(0deg);\
						    }\
						    to {\
						      -moz-transform: rotateY(-360deg);\
						      -ms-transform: rotateY(-360deg);\
						      transform: rotateY(-360deg);\
						    }\
						  }\
						\
						</style>';

		var img = document.createElement("img");
		var random = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
		if(pmbDiv.childNodes[0].id != null && pmbDiv.childNodes[0].id != '') {
			random = pmbDiv.childNodes[0].id;
		}
		
		img.id = random + '_img';
		img.src = CMBSU_URL + 'sigla%20-%20PMB.gif';
		img.style.top = height/2 + 'px';
		
		img.className = 'loadingImg';
		div.appendChild(img);
		pmbDiv.childNodes[0].id = random;
		
		pmbDiv.insertBefore(div, pmbDiv.childNodes[0]);
		
	},
	
	hideLoader: function(iframe) {
		document.getElementById(iframe.id + '_img').style.display = 'none';
		alert(iframe.style.visibility);
		iframe.style.visibility = 'visible !important';
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
		       
		       try{	
		       		CMBSU_CSS.createLoader(frames[i], $(frames[i]).outerHeight());
		       }catch(ex){}
		       
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
	
	buildLeftMenu: function() {
		/*
		var H = window.screen.availHeight;
		
		var leftMenu = '<div id="leftMenu">\
			<a href="portal/pmbext/Test componente/Contact/Sesizari"><div id="complaintDivMenu" class="leftMenuButtom" style="position:fixed;top:' + 5*H/12 + 'px">P</div></a>\
			<div id="newsLetterDivMenu" class="leftMenuButtom" style="position:fixed;top:' + 6*H/12 + 'px"></div>\
			<a target="blank" href="http://www.prefecturabucuresti.ro/"><div id="prefecturaDivMenu" class="leftMenuButtom" style="position:fixed;top:' + 7*H/12 + 'px">P</div></a>\
			</div>';
		$('body').append(leftMenu);
		*/
	},
	
	writeAlert: function(type, content) {
		var div = document.createElement("div");
		
		//if(type == 0) {
			return;
		//}
		
		if(type == 1) {
			div.className= "alert_div";
			div.innerHTML = '<div style="float:left"><img style="height:40px;padding-top:5px;" src="' + CMBSU_URL + 'alert-sign.gif"/></div>';
		} else if(type == 2) {
			div.className= "warning_div";
			div.innerHTML = '<div style="float:left"><img style="height:40px;padding-top:5px;" src="' + CMBSU_URL + 'warning-sign.gif"/></div>';
		}
		
		
		div.innerHTML += '<div class="alert_content">' + content + '</div>';
		
		div.style.position = 'fixed';
		document.getElementById('f1').insertBefore(div, document.getElementById('f1').firstChild);   
		//document.getElementById('T:gtbpgl0').insertBefore(div, document.getElementById('T:gtbpgl0').firstChild);    
		
	},
	
	getAlert: function() {
		
		$.ajax({ 
	        type: 'GET', 
	        url: CMBSU_COMPANION + 'alert', 
	        data: {}, 
	        success: function (data) { 
	        	CMBSU_CSS.writeAlert(data.type, data.message);
	        }
	    });
		
		
	},
	
	middleSliderModify: function() {
		if(document.getElementById('pcnt1598024334') != null) {
			document.getElementById('pcnt1598024334').className += ' colorWrapper';
			document.getElementById('T:hm_pnc2').className += ' topDiv';
		}
		
	},
	
	quizHide: function() {
		
		if(CMBSU_CSS._ANIMATION_SPINLOCK == 1) {
			return;
		}
		
		CMBSU_CSS._ANIMATION_SPINLOCK = 2;
		var elem = document.getElementById('T:oc_1718626991region1');
		
		if(parseInt(elem.style.width.split('px')[0]) > 0) {
			
			if(parseInt(elem.style.width.split('px')[0]) - 20 > 0) {
				elem.style.width = (parseInt(elem.style.width.split('px')[0]) - 20) + 'px';
			} else {
				elem.style.width = '0px';
			}
			
			setTimeout('CMBSU_CSS.quizHide();', 5);
		} else {
			elem.style.width = '0px';
			CMBSU_CSS._ANIMATION_SPINLOCK = 0;
		}
		
		CMBSU_CSS._ANIMATION_SPINLOCK = false;
		
	},
	
	quizShow: function(_width) {
		
		if(CMBSU_CSS._ANIMATION_SPINLOCK == 2) {
			return;
		}
		
		CMBSU_CSS._ANIMATION_SPINLOCK = 1;
		
		var elem = document.getElementById('T:oc_1718626991region1');
	
		if(parseInt(elem.style.width.split('px')[0]) < _width) {
			elem.style.width = (parseInt(elem.style.width.split('px')[0]) + 20) + 'px';
			setTimeout('CMBSU_CSS.quizShow(' + _width + ');', 5);
		} else {
			elem.style.width = _width + 'px';
			CMBSU_CSS._ANIMATION_SPINLOCK = 0;
		}

	},
	
	quizModify: function() {
		

		document.getElementById('T:oc_1718626991region1').className += ' quizTd';
		if(document.getElementById('T:oc_1718626991region1:tspgl2') != null) {
			
			document.getElementById('T:oc_1718626991region1:tspgl2').firstChild.onclick = function() {
				//alert(document.getElementById('T:oc_1718626991region1').firstChild.tagName);
				$(document.getElementById('T:sdf_for_oc_1718626991region1').firstChild).effect('slide', {}, 1000, function() {});
			};
			
			
		}
		
		//var tds = document.getElementById('T:pgl8241733443').firstChild.firstChild.childNodes;
		//tds[1].className += 'quizTd';
		
		try {
			document.getElementById('T:oc_1718626991region1:srsctb1').style.display = 'none';
		}catch(ex){}
		
		try {
			document.getElementById('T:oc_1718626991region1:srsctb3').style.display = 'none';
		}catch(ex){}
		
		try {
			document.getElementById('T:oc_1718626991region1:srsocql1').style.display = 'none';
		}catch(ex){}

		
		
		if(document.getElementById('T:oc_1718626991region1:srbg12::img') != null) {
			
			//$('#T:sdf_for_oc_1718626991region1::div2').hide();
			//document.getElementById('T:oc_1718626991region1').style.width = '442px'; 
			
			document.getElementById('T:oc_1718626991region1:srpglswt1').style.width = '442px';
			
		} else {
			
			document.getElementById('T:oc_1718626991region1:tspgl2').style.width = '350px';
			
			
			document.getElementById('T:oc_1718626991region1:tspgl2').style.overflow = 'hidden'; 
		}
		
		
		//hide quiz
		document.getElementById('T:oc_1718626991region1').style.width = '0px';
	
		
		$(window).scroll(function() {
		   if($(window).scrollTop() + $(window).height() > $(document).height() - 30) {

			   if(document.getElementById('T:oc_1718626991region1:srbg12::img') != null) {
				   CMBSU_CSS.quizShow(450);
			   } else {
				   CMBSU_CSS.quizShow(350);  
			   }
			   
		   } else {
			   CMBSU_CSS.quizHide();
		   }
		});
		
	},
	
	createUserDiv: function() {
		
		if(document.getElementById('T:wcLogoutLink:logoutLink') == null) {
			return;
		}
		var div = document.createElement("div");
		document.getElementById('T:pgl1').appendChild(div);
		div.id = 'user_profile_';
		div.className = 'user_profile_';
		
		document.getElementById('T:pcust29::content').style.display = 'none';
		
		if(document.getElementById('T:wcAdminLink:adminLink') != null) {
			div.appendChild(document.getElementById('T:wcAdminLink:adminLink'));
		}
		
		
		if(document.getElementById('T:wcLogoutLink:logoutLink') != null) {
			div.appendChild(document.getElementById('T:wcLogoutLink:logoutLink'));
		}
		
		$.ajax({ 
	        type: 'GET', 
	        url: CMBSU_COMPANION + 'user', 
	        data: {}, 
	        success: function (data) { 
	        	var div_nume = document.createElement("div");
	        	
	        	if(data.org != null) {
	        		div_nume.innerHTML = data.firstName + ' ' + data.lastName + ' din ' + data.org; 
	        	} else {
	        		div_nume.innerHTML = document.getElementById('T:currUserWcLink:userProfileLink').innerHTML;
	        	}
	        	
	        	div.appendChild(div_nume);
	        	
	        }
	    });
		
		
	},
	
	firstPageModificators: function() {
		CMBSU_CSS.middleSliderModify();
		CMBSU_CSS.quizModify();
	
	},
 	
    init: function() {
   
    	$( document ).ready(function() {
    			CMBSU_CSS.createLayout();
    			CMBSU_CSS.createLayoutIE();
    			CMBSU_CSS.createPageDropEditor();
    			CMBSU_CSS.createSliderSearch();
    			CMBSU_CSS.createScroll();
    			CMBSU_CSS.createUserDiv();
    			
    		
    	});
    	
    	CMBSU_CSS.createFrames();
    	CMBSU_CSS.getAlert();
    	CMBSU_CSS.buildLeftMenu();
    	
    	if(document.getElementById('firstPage') != null){
    		CMBSU_CSS.firstPageModificators();
    	}
    }
};

CMBSU_CSS.init();