myApp.factory( 'Authentication', function($firebase, $firebaseAuth, $routeParams, $location){
	var ref = new Firebase("https://clusterchat.firebaseio.com");
	var myObject ={
		login: function(user){
			return ref.authWithPassword({
	  			email: user.email,
				password: user.password
				},function(error, authData) {
			  		if (error) {
						console.log("Login Failed!", error);
			  		} else {
			  			$location.path('/meetings');
			    		console.log("Authenticated successfully with payload:", authData);	    		
			  		}
		});//auth with password
		}//login
	};//my object
	return myObject;
});// Authentication factory