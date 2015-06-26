

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
		
		if(document.getElementById('T:pgl1') != null){
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
		}
		
		if(document.getElementById('T:pc5350921564')) {
			document.getElementById('T:pc5350921564').style.padding = '0px';	
		}
		
		//content
		if(document.getElementById('T:hm_pnc2') != null) {
			document.getElementById('T:hm_pnc2').style.padding = '';
		}
		
		
		document.getElementById('T:contentBody').style.bottom = '-1px';
		
		//searchbox
		document.getElementById('T:searchbox').style.position = 'relative';
		document.getElementById('T:searchbox').style.top = '2px';
		
		//footer
		var div = document.createElement("div");
		
		if(document.getElementById('T:pgl1') != null) {
			document.getElementById('T:pgl1').appendChild(div);
			
			document.getElementById('T:pgl2').style.minHeight= '550px';
			
		} else {
	
			document.getElementById('T:pgc1').appendChild(div);
			
			document.getElementById('T:pgc1::c').style.position = 'relative';
			document.getElementById('T:psl2').style.position = 'relative';
			
			document.getElementById('T:contentBody').style.bottom = '-10px';
			document.getElementById('T:contentBody').style.right = '-3px';
			
			document.getElementById('T:pgc1').style.position = 'relative';
			
			
		}
		
		
		
		
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
	
		if(document.getElementById('T:pgl1') == null) {
			document.getElementById('T:wc_psl3::c').appendChild(document.getElementById('T:pgc1'));
			
		} else {
			document.getElementById('f1').insertBefore(document.getElementById('T:pgl1'), document.getElementById('f1').firstChild);    
			document.getElementById('f1').removeChild(document.getElementById('T:globalContainer'));
			document.getElementById('T:pgl1').style.overflow = '';
			document.getElementById('T:wc_psl369').style.height = '10px';
		}
		
		
	
		
	},
	
	createLayoutIE: function() {
		document.getElementById('T:pcust2::content').style.overflow = 'hidden';
	},
	
	
	createLoader: function(pmbDiv, height) {

		if($('.loadingDiv').length > 0) {
			return;
		}
		
		if(pmbDiv.childNodes.length != 1 && pmbDiv.childNodes.length != 2) {
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

		var length = pmbDiv.childNodes.length - 1;
		var img = document.createElement("img");
		var random = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
		if(pmbDiv.childNodes[length].id != null && pmbDiv.childNodes[length].id != '') {
			random = pmbDiv.childNodes[length].id;
		}
		
		img.id = random + '_img';
		img.src = CMBSU_URL + 'sigla%20-%20PMB.gif';
		img.style.top = height/2 + 'px';
		
		img.className = 'loadingImg';
		div.appendChild(img);
		pmbDiv.childNodes[length].id = random;
		
		pmbDiv.insertBefore(div, pmbDiv.childNodes[length]);
		
	},
	
	hideLoader: function(iframe) {
		document.getElementById(iframe.id + '_img').style.display = 'none';
		iframe.style.visibility = 'visible';
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

		var div = document.createElement('div');
		div.id = 'alert_div_main';
		
		if(type == 1) {
			div.className= "alert_div";
			
		} else if(type == 2) {
			div.className= "warning_div";
			
		}  else if(type == 3) {
			div.className= "info_div";
			
		}
		
		div.innerHTML += '<div class="alert_content">' + content + '</div>';
		
		div.style.position = 'relative';
	
		div.onclick = function() {
			window.location = 'pmbext/Test componente/Contact/Sesizari?alert=true';
		};
		
		
		document.getElementById('T:pgl8268332567').childNodes[0].insertBefore(div, document.getElementById('T:pgl8268332567').childNodes[0].childNodes[0]); 
		
	},
	
	getAlert: function() {
		
		$.ajax({ 
	        type: 'GET', 
	        url: CMBSU_COMPANION + 'alert', 
	        data: {}, 
	        success: function (data) {
	       
	        	if(data.display == 1) {
	        		CMBSU_CSS.writeAlert(data.type, data.message);
	        	}
	        	
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
			document.getElementById('T:wcAdminLink:adminLink').className += ' adminDIV';
			div.appendChild(document.getElementById('T:wcAdminLink:adminLink'));
		}
		
		
		if(document.getElementById('T:wcLogoutLink:logoutLink') != null) {
			document.getElementById('T:wcLogoutLink:logoutLink').className += ' logoutDIV';
			div.appendChild(document.getElementById('T:wcLogoutLink:logoutLink'));
		}
		
		$.ajax({ 
	        type: 'GET', 
	        url: CMBSU_COMPANION + 'user', 
	        data: {}, 
	        success: function (data) { 
	        	var div_nume = document.createElement("div");
	        	div_nume.innerHTML = '<img class="img_DIV" src="' + CMBSU_URL + 'SMALL.png"></img>';
	        	
	        	if(data.org != null && data.org != 'null') {
	        		div_nume.innerHTML += '<div class="firstName_DIV">' + data.firstName + '</div>';
	        		div_nume.innerHTML += '<div class="lastName_DIV">' + data.lastName + '</div>';
	        		div_nume.innerHTML += '<div class="orgName_DIV">C.U.I: ' + data.org + '</div>';
	        		
	        		var a = document.createElement("a");
	        		a.href = '/webcenter/portal/system/Profile';
	        		a.className = 'personal_DIV';
	        		a.innerHTML = 'Personal';
	        		div.appendChild(a); 
	        		
	        	} else {
	        		div_nume.innerHTML += '<div class="firstName_DIV">' +  document.getElementById('T:currUserWcLink:userProfileLink').innerHTML + '</div>';

	        	}
	        	
	        	div.appendChild(div_nume);
	        	
	        }
	    });
		
		
	},
	
	firstPageModificators: function() {
		CMBSU_CSS.middleSliderModify();
		CMBSU_CSS.quizModify();
	
	},
	
	searchViewer: function()  {
		if(document.getElementById('T:theTaskFlow:dsr1:srMain::f') != null) {
			document.getElementById('T:theTaskFlow:dsr1:srMain::f').style.display = 'none';
		}
		
		if(document.getElementById('T:theTaskFlow:dsr1:srMain::d') != null) {
			document.getElementById('T:theTaskFlow:dsr1:srMain::d').style.display = 'none';
		}
		
		
    },
    
    createSearchResults: function() {
    
    	if(document.getElementById('T:theTaskFlow:dsr1:spkwpgl1') == null) {
    		return;
    	}
    	
    	var i=0;
    	for(; i<9 ;i++) {
    		if(document.getElementById('T:theTaskFlow:dsr1:pb1j_id_' + i) != null) {
    			document.getElementById('T:theTaskFlow:dsr1:pb1j_id_' + i).style.display = 'none';
    		}	

    	}
    	
		if(document.getElementById('T:theTaskFlow:dsr1:ssresfph1j_id_9::_afrTtxt') != null) {
			document.getElementById('T:theTaskFlow:dsr1:ssresfph1j_id_9::_afrTtxt').childNodes[0].style.display = 'none';	
		}
	
	
		if(document.getElementById('T:theTaskFlow:dsr1:ssresfph1j_id_9') != null) {
			document.getElementById('T:theTaskFlow:dsr1:ssresfph1j_id_9').childNodes[0].style.borderBottom = '0px solid white';	
		}
		
		if(document.getElementById('T:theTaskFlow:dsr1:pb1j_id_9') != null) {
			document.getElementById('T:theTaskFlow:dsr1:pb1j_id_9').style.border = '0px solid white';	
		}

		if(document.getElementById('T:theTaskFlow:dsr1:b10367603') != null) {
			document.getElementById('T:theTaskFlow:dsr1:b10367603').style.display = 'none';	
		}
		
		
		i=0;
		
		while(true) {
			
			if(document.getElementById('T:theTaskFlow:dsr1:ssresi1j_id_9:' + i + ':ddc1:ssresfi2') != null) {
				document.getElementById('T:theTaskFlow:dsr1:ssresi1j_id_9:' + i + ':ddc1:ssresfi2').style.display = 'none';
			} else {
				break;
			}
		

			if(document.getElementById('T:theTaskFlow:dsr1:ssresi1j_id_9:' + i + ':ddc1:pglln2') != null) {
				document.getElementById('T:theTaskFlow:dsr1:ssresi1j_id_9:' + i + ':ddc1:pglln2').style.display = 'none';
				
			}
			
			//we change the page's name
			if(document.getElementById('T:theTaskFlow:dsr1:ssresi1j_id_9:' + i + ':ddc1:ssresfcl2') != null) {
				document.getElementById('T:theTaskFlow:dsr1:ssresi1j_id_9:' + i + ':ddc1:ssresfcl2').style.textDecoration = 'none';
				document.getElementById('T:theTaskFlow:dsr1:ssresi1j_id_9:' + i + ':ddc1:ssresfcl2').childNodes[0].style.color = '#005391';  
				document.getElementById('T:theTaskFlow:dsr1:ssresi1j_id_9:' + i + ':ddc1:ssresfcl2').childNodes[0].innerHTML = document.getElementById('T:theTaskFlow:dsr1:ssresi1j_id_9:' + i + ':ddc1:ssresfcl2').childNodes[0].innerHTML.split('-')[1];
				
			}
			
			
			i++;
		}
		
		
    	if(document.getElementById('T:theTaskFlow:dsr1:spkwpgl1') != null) {
    		document.getElementById('T:theTaskFlow:dsr1:spkwpgl1').style.display = 'none'; 
    	}
    	
    	if(document.getElementById('T:theTaskFlow:dsr1:sspgl0') != null) {
    		document.getElementById('T:theTaskFlow:dsr1:sspgl0').style.display = 'none'; 
    	}
    },
    
    hideSearch: function() {
    
    	
    	if(document.getElementById('T:gtbrspmxgl2').innerHTML.indexOf('privat') > -1) {
    		document.getElementById('T:searchbox').style.display = 'none'; 
    	}
    	
    },
    
    createMenu: function() {
    	
    	var tree = {};
    	
    	$('.x112 a').each(function(index) {
    		tree[index] = {'name' : $(this).html(), children: []};
    	});
    	
    	$('.x11o').each(function(index) {
    	alert$(this).parent().html());
    		console.log($(this).parent().id.split(':')[2]);
    		tree[$(this).parent().id.split(':')[2]].children.push({'name' : $(this).html(), children: []});
    	});
    	
    	
    	console.log(tree);
    	return tree;
    },
    
    buildMenu: function(tree) {
    	var html = '<div class="menu_first_level">';
    	for(var i in tree) {
    		if(tree[i] == null) {
    			html += '<div class="menu_first_level_element">' + tree[i].name + '</div>';
    		}
    	}
    	
    	html += '<div class="menu_logo">';
    	html += '<img id="menu_logo_image" src="' + CMBSU_URL + 'sigla%20-%20PMB.gif"/>'; 
    	html += '<div class="menu_logo_text">' + document.getElementById('T:gtbrspmxgl2').childNodes[0].innerHTML + '</div>';
    	html += '</div>';
    	
    	html += '</div>';
    	
    	var div = document.createElement('div');
    	div.innerHTML = html;
    	
    	document.getElementById('T:pgl2').appendChild(div);
    },
    
    buildMobile: function() {
    	var isMobile = false; //initiate as false
    	// device detection
    	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    		isMobile = true;
    	}
    	
    	if(!isMobile){
    		return;
    	}
    	
    	//alert(2);
    },
 	
    init: function() {
   
    	
    	CMBSU_CSS.createMenu();
    	//CMBSU_CSS.buildMenu(CMBSU_CSS.createMenu());
    	
    	$( document ).ready(function() {
    		   
        		CMBSU_CSS.hideSearch();
        		CMBSU_CSS.createSearchResults();
        	
    		    CMBSU_CSS.searchViewer();
    			CMBSU_CSS.createLayout();
    			CMBSU_CSS.createLayoutIE();
    			CMBSU_CSS.createPageDropEditor();
    			CMBSU_CSS.createSliderSearch();
    			CMBSU_CSS.createScroll();
    			CMBSU_CSS.createUserDiv();
    			
    		
    	});
    	

    	CMBSU_CSS.createFrames();
    	CMBSU_CSS.buildLeftMenu();
    	
    	if(document.getElementById('firstPage') != null){
    		CMBSU_CSS.firstPageModificators();
    		CMBSU_CSS.getAlert();
    	}
    }
};

CMBSU_CSS.init();