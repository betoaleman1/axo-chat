var firebaseConfig = {
    apiKey: "AIzaSyBncqKp79T6Gk1mgEKgtBl8iqL84Hgdlho",
    authDomain: "axo-chat-446f3.firebaseapp.com",
    databaseURL:"https://axo-chat-446f3-default-rtdb.firebaseio.com",
    projectId: "axo-chat-446f3",
    storageBucket: "axo-chat-446f3.appspot.com",
    messagingSenderId: "577078256296",
    appId: "1:577078256296:web:22a7a203f137587792589d",
    measurementId: "G-CQS01QY0LL"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "¡bienvenido, " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "main_room.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "main_room.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  