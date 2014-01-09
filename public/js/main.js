CloudFlare.define(
    'test_app',
    ['test_app/config'],
    function(config) {

	if( config.identifier !== "" ) {
	
	    var url = "//traffic3.helponclick.com/assist?lang=en&ava=1&mode=widget&widget=r&a=" + config.identifier;
	
	    CloudFlare.require([url]);
	}
    });
