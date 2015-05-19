var CMBSU_ALERT = {

	writeAlert: function(type, content) {
		var div = document.createElement("div");
		
		if(type == 'A') {
			div.className= "alert_div";
			div.innerHTML = '<div style="float:left"><img style="height:40px;padding-top:5px;" src="' + CMBSU_URL + 'alert-sign.gif"/></div>';
		} else if(type == 'W') {
			div.className= "warning_div";
			div.innerHTML = '<div style="float:left"><img style="height:40px;padding-top:5px;" src="' + CMBSU_URL + 'warning-sign.gif"/></div>';
		}
		
		
		div.innerHTML += '<div class="alert_content">' + content + '</div>';
		
		div.style.position = 'absolute';
		document.getElementById('f1').insertBefore(div, document.getElementById('f1').firstChild);   
		//document.getElementById('T:gtbpgl0').insertBefore(div, document.getElementById('T:gtbpgl0').firstChild);    
		
	},
	
	getAlert: function() {
		
		$.ajax({ 
	        type: 'GET', 
	        url: CMBSU_COMPANION + 'alert', 
	        data: {}, 
	        success: function (data) { 
	        	CMBSU_ALERT.writeAlert(data.type, data.message);
	        }
	    });
		
		
	},
	
	init: function() {
		CMBSU.loadScript(CMBSU_URL + 'cmbsu_css.js', function(){});
		CMBSU_ALERT.getAlert();
	}
    
};


