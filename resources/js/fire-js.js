  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCy5WyLy26N2ct6jPYZT9BZQgHyDLDqclM",
    authDomain: "one-more-56ea9.firebaseapp.com",
    projectId: "one-more-56ea9",
    storageBucket: "one-more-56ea9.appspot.com",
    messagingSenderId: "929158024527",
    appId: "1:929158024527:web:2d3624ad0ef3b70314093a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//   reference message collation
let messageRef = firebase.database().ref('Messages');
// let messageRef = firebase.database().ref('user');

// listen for submit button
document.getElementById('contact-form').addEventListener('submit',(e)=>{
  e.preventDefault();
  const name = getId('name');
  const email = getId('email');
  const selected = getId('select');
  const message = getId('message');
  // call  save message
  saveMessage(name,email,selected,message)
  // reset
  clear();
})

function clear(){
  document.getElementById('contact-form').reset();
}

function getId(element){
    if(element){
      return  document.getElementById(element).value;
    }else{
        console.log("selected element is is incorrect!");
    }
}


// save message to firebase
function saveMessage(name,email,selected,message){
    let  newMessageRef = messageRef.push();
    newMessageRef.set({
        name,
        email,
        selected,
        message,
    })
}