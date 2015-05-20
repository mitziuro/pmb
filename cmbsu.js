var CMBSU_URL = 'https://rawgit.com/mitziuro/pmb/master/';
var CMBSU_COMPANION = '/pmbext-extension/';

var CMBSU = {

		
	
	loadScript: function(url, callback) {
		    // Adding the script tag to the head as suggested before
		    var head = document.getElementsByTagName('head')[0];
		    var script = document.createElement('script');
		    script.type = 'text/javascript';
		    script.src = url;

		    // Then bind the event to the callback function.
		    // There are several events for cross browser compatibility.
		    script.onreadystatechange = callback;
		    script.onload = callback;

		    // Fire the loading
		    head.appendChild(script);
	},

    init: function() {
    	
   
    	CMBSU.loadScript('http://yui.yahooapis.com/3.18.1/build/yui/yui-min.js', function(){});
    	CMBSU.loadScript('http://code.jquery.com/jquery-2.1.4.min.js', function(){
    	
    		//carrousel
    		CMBSU.loadScript('http://bxslider.com/lib/jquery.bxslider.js', function(){
    			
    			CMBSU.loadScript(CMBSU_URL + 'cmbsu_carrousel.js', function(){});
    			
    		});
    		
    		alert(143);
        	
    		CMBSU.loadScript(CMBSU_URL + 'cmbsu_css.js', function(){});
    		
    	});
    	
    	
    	
    	
    	
    	
    	
    }
};

CMBSU.init();

