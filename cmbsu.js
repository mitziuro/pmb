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
    	CMBSU.loadScript('https://rawgit.com/mitziuro/pmb/master/cmbsu_css.js', function(){});
    }
};
//alert(document.getElementById('T:wc_psl36::r'));
//setTimeout(" alert(document.getElementById('T:wc_psl36::r'));", 3000);
CMBSU.init();

