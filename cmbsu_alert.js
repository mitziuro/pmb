var CMBSU_ALERT = {

	writeAlert: function() {
		
		var div = document.createElement("div");
		div.innerHTML = 'HANNA ARE Kortosh';
		
		document.getElementById('T:pgl1').insertBefore(div, document.getElementById('T:pgl1').firstChild);    
		
	},
	
	init: function() {
		CMBSU_ALERT.writeAlert();
	}
    
};


