var CMBSU_ALERT = {

	writeAlert: function() {
		alert(1);
		var div = document.createElement("div");
		alert(2);
		div.innerHTML = 'HANNA ARE Kortosh';
		alert(3);
		div.className= "alert_div";
		alert(4);
		document.getElementById('T:pgl1').insertBefore(div, document.getElementById('T:pcl1').firstChild);    
		alert(5);
	},
	
	init: function() {
		CMBSU_ALERT.writeAlert();
	}
    
};


