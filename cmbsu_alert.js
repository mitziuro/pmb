var CMBSU_ALERT = {

	writeAlert: function() {
		var div = document.createElement("div");
		div.innerHTML = '<div style="float:left"><img style="height:40px;padding-top:5px;" src="https://rawgit.com/mitziuro/pmb/master/alert-sign.gif"/></div>';
		div.innerHTML += '<div class="alert_content">Alerta</div>';
		div.className= "alert_div";
		//document.getElementById('T:pcl1::c').insertBefore(div, document.getElementById('T:pcl1::c').firstChild);   
		document.getElementById('T:pgl1').insertBefore(div, document.getElementById('T:pgl1').firstChild);    
		
	},
	
	init: function() {
		CMBSU_ALERT.writeAlert();
	}
    
};


