firebaseConfig = {
      apiKey: "AIzaSyAQq1UB7ZNOnSS41j3xiSxSV3tnIoY-VzQ",
      authDomain: "text-base.firebaseapp.com",
      projectId: "text-base",
      storageBucket: "text-base.appspot.com",
      messagingSenderId: "152673338047",
      appId: "1:152673338047:web:081f98571b94d56ce6fc0a"
    };

    
const config = {   apiKey: "AIzaSyAQq1UB7ZNOnSS41j3xiSxSV3tnIoY-VzQ",
authDomain: "text-base.firebaseapp.com",
projectId: "text-base",
storageBucket: "text-base.appspot.com",
messagingSenderId: "152673338047",
appId: "1:152673338047:web:081f98571b94d56ce6fc0a"}
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {
      user_name=null;
      localStorage.setItem("user_name",user_name);
      window.location="index.html";
}
