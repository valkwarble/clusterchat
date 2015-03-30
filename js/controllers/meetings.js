myApp.controller("MeetingsController", function($scope, $firebaseObject,$firebaseAuth, Authentication){
	$scope.$on('$viewContentLoaded', function(){
		console.log($scope.meetings);	
	});//log form to console trigger on view HTML load
	

	var chatRef = new Firebase('https://clusterchat.firebaseio.com');
    var target = document.getElementById("firechat-wrapper");
    
    var chatRef = new Firebase('https://clusterchat.firebaseio.com/chat');
    chatRef.onAuth(function(authData) {
        // Once authenticated, instantiate Firechat with our user id and user name
        if (authData) {
          var chat = new FirechatUI(chatRef, document.getElementById('firechat-wrapper'));
          chat.setUser(authData.uid, authData[authData.provider].displayName);
        }
    });
  //   chatRef.onAuth(function(authData) {
		// if (authData) {
		// 	initChat(authData);
		// }
  //   });
 //    function initChat(authData) {
	// 	var chat = new Firechat(chatRef);
		
	// 	console.log(authData.uid);
	// 	console.log("steven");
	// 	chat.setUser(authData.uid, "pepper", function(user) {
 // 		 chat.resumeSession();
	// 	});
	// }

    function chatlogin() {
      authModal.modal('hide');
      chatRef.authWithOAuthPopup("facebook", function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				console.log("Authenticated successfully with payload:", authData);
			}
		});
    }
    function logout() {
      chatRef.unauth();
      location.reload();
    }

	$scope.addFeature = function(){
		console.log($scope.meetings);	
		meetingRef.push({
			"name": $scope.featurename,
			"date": Firebase.ServerValue.TIMESTAMP
		},function(){
			$scope.featurename="";
		});// push the data into firebase 
	}//called from meetings html uppon form submission
});//MeetingsController
