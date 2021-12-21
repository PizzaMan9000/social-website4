var firebaseConfig = {
    apiKey: "AIzaSyBacOpXkHAZbZ0s2ZqbIlY6hxPzUCGfXd0",
    authDomain: "chatappproject-2f098.firebaseapp.com",
    databaseURL: "https://chatappproject-2f098-default-rtdb.firebaseio.com",
    projectId: "chatappproject-2f098",
    storageBucket: "chatappproject-2f098.appspot.com",
    messagingSenderId: "83926784973",
    appId: "1:83926784973:web:3e14225152a7a049f40284"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send() {
    message = document.getElementById("msg").value;

    firebase.database().ref(room_name).push({
        name:user_name,
        message: message,
        like: 0
    });

    document.getElementById("msg").value = "";
}