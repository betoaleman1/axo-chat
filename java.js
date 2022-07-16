
   var firebaseConfig = {
    apiKey: "AIzaSyBUMYIj4q4SONlEOV1wxu1FBHyu8jMqoQw",
    authDomain: "axo-chat-2.firebaseapp.com",
    projectId: "axo-chat-2",
    databaseURL:"https://axo-chat-2-default-rtdb.firebaseio.com/",
    storageBucket: "axo-chat-2.appspot.com",
    messagingSenderId: "864888334571",
    appId: "1:864888334571:web:afbf4c0ce07345f00e76ae",
    measurementId: "G-QNBWSXL7GE"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name")

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
  
  function getData() {  firebase.database().ref("/").on('value', 
  function(snapshot) { document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
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
  