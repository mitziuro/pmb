var CMBSU_ALERT = {

	writeAlert: function() {
		var div = document.createElement("div");
		div.innerHTML = 'HANNA ARE Kortosh';
		div.className= "alert_div";
		document.getElementById('T:pcl1::c').insertBefore(div, document.getElementById('T:pcl1::c').firstChild);    
	},
	
	init: function() {
		CMBSU_ALERT.writeAlert();
	}
    
};


