var CMBSU_ALERT = {

	writeAlert: function() {
		var div = document.createElement("div");
		div.innerHTML = '<div style="float:left"><img style="width:10px;height:10px" src="https://rawgit.com/mitziuro/pmb/master/alert-sign.jpg"/></div><div>Alerta</div>';
		div.className= "alert_div";
		document.getElementById('T:pcl1::c').insertBefore(div, document.getElementById('T:pcl1::c').firstChild);    
	},
	
	init: function() {
		CMBSU_ALERT.writeAlert();
	}
    
};


