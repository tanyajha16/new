var firebaseConfig = {
  apiKey: "AIzaSyCnBn7BqdtvjoVqawwKQ7_jPfjNKnsv1e8",
  authDomain: "newfirebase-c479e.firebaseapp.com",
  databaseURL: "https://newfirebase-c479e.firebaseio.com",
  projectId: "newfirebase-c479e",
  storageBucket: "newfirebase-c479e.appspot.com",
  messagingSenderId: "845608843636",
  appId: "1:845608843636:web:050cc7a96a265a1eda5421",
  measurementId: "G-HHHWNQVCJS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistence.LOCAL;

// var button=document.getElementById("btn-login");
// button.addEventListener("click", function()
// {
//     var email=document.getElementById("emailcurr");
//     var password=document.getElementById("passwordcurr");
//     email=email.value;
//     password=password.value;

//     if(email != " " && password!= " ")
//     {
//       var result= firebase.auth().signInWithEmailAndPassword(email,password);
//       result.catch(function(error)
//     {
//       var errorCode=error.code;
//       var errorMessage=error.message;
//       console.log("errorcode", errorCode);
//       console.log("errormessage", errorMessage);
//       window.alert("message :",errorMessage);
//     });
//     }
//     else
//     {
//       window.alert("Please Enter Your Details.");
//     }
// });
//

$("#btn-login").click(function () {
  var email = $("#emailcurr").val();
  var password = $("#passwordcurr").val();

  if (email != " " && password != " ") {
    var result = firebase.auth().signInWithEmailAndPassword(email, password);
    result.catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("errorcode", errorCode);
      console.log("errormessage", errorMessage);
      window.alert("message :", errorMessage);
    });
  } else {
    window.alert("Please Enter Your Details.");
  }
});
$("#btn-logout").click(function () {
  firebase.auth().signOut();
});
$("#btn-logout1").click(function () {
    
  firebase.auth().signOut();
});
