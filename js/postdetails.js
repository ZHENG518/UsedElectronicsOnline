function getPostById(id){
	var firebase = require("firebase/app");
	require("firebase/database");
	var firebaseConfig = {
			apiKey: "AIzaSyBa5C0ajfZM6f7eE64L7n6lmk9QP8pHlAo",
			authDomain: "used-electronics-online.firebaseapp.com",
			databaseURL: "https://used-electronics-online.firebaseio.com",
			projectId: "used-electronics-online",
			storageBucket: "used-electronics-online.appspot.com",
			messagingSenderId: "575629351639",
			appId: "1:575629351639:web:d9317118bcf7391e"
	};
	if (!firebase.apps.length) {
	    firebase.initializeApp(firebaseConfig);
	}

	var posts;
	var ref = firebase.database().ref("/post/"+id).once('value').then(function(snap){
		return {
				"title":childSnapshot.val().title, 
				"price":childSnapshot.val().price,
				"picURL":childSnapshot.val().pictureURL, 
		};
	});

  	firebase.database().goOffline();
};

module.exports=getPostById;