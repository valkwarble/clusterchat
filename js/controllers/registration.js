myApp.controller('RegistrationController', function($scope, $location, $firebaseAuth, Authentication){
	$scope.$on('$viewContentLoaded', function(){
		console.log($scope.loginForm);	
	});//log form to console trigger on view HTML load
	var ref = new Firebase("https://clusterchat.firebaseio.com");
	var authRef = new Firebase("https://clusterchat.firebaseio.com/");
	$scope.authRef= authRef;




	$scope.login = function(){
		
		Authentication.login($scope.user);
		$scope.authRef.onAuth(function(authData) {
		  if (authData) {
		    console.log("Authenticated with uid:", authData.uid);
		  } else {
		    console.log("Client unauthenticated.")
		  }
		});
		// console.log(authData);
		// var ref = new Firebase("https://clusterchat.firebaseio.com");
		// console.log($scope.user.email);
		// ref.authWithPassword({
  // 			email: $scope.user.email,
		// 	password: $scope.user.password
		// }, function(error, authData) {
	 //  		if (error) {
	 //  			$scope.message = error.message;
		// 		console.log("Login Failed!", error);
	 //  		} else {
	 //  			$location.path('/meetings');
	 //    		console.log("Authenticated successfully with payload:", authData);
	    		
	 //  		}
		// });

			
	}//login function triggered by ng-submitt directive on login.html page
	
	$scope.facebookLogin = function(){
		$location.path('/meetings');
		ref.authWithOAuthPopup("facebook", function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				console.log("Authenticated successfully with payload:", authData);
			}
		});
	}//facebooklogin function triggered by ng-submitt directive on login.html page
	
	$scope.register = function(){
		$location.path('/login');
	}//login function triggered by n
});//RegistrationController