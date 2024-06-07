const firebaseConfig = {
    //   copy your firebase config informations
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("feedback-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var Ratings = getElementVal("rating");
    var Comments = getElementVal("comments");
  
    saveMessages(name, emailid, Ratings, Comments);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("feedback-form").reset();
  }
  
  const saveMessages = (name, emailid, Ratings, Comments) => {
    var newContactForm = feedback-form.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      Ratings: Ratings,
      Comments: Comments,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };