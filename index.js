var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/database");

function getPostsByCategory(category){
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

	var posts = [];
	var query = firebase.database().ref("post").orderByChild("category").equalTo(category);
	query.on("value", function(snapshot){
		snapshot.forEach(function(childSnapshot){
			posts.push({
				"picURL":childSnapshot.val().pictureURL, 
				"title":childSnapshot.val().title, 
				"price":childSnapshot.val().price, 
				"id":childSnapshot.key
			});
		});
	});
	return posts;
};


module.exports=getPostsByCategory;