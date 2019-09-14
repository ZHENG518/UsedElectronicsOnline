function registerWithEmailAndPassword(email, password){
	var firebase = require("firebase/app");
    require("firebase/auth");
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

	const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword(email, password);
	return promise;
  	firebase.database().goOffline();

};

module.exports=registerWithEmailAndPassword;