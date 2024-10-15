function data(){
    // let selectedname = querySelector('#name');
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let email = document.querySelector('#email').value;
    let number = document.querySelector('#number').value;
    let DOB = document.querySelector('#DOB').value;
    console.log(name);
    console.log(age);
    console.log(email);
    console.log(number);
    console.log(DOB);

    if(name === ""){
     document.querySelector('#errorname').innerHTML = "please enter your name";
     let selectname = document.querySelector('#name');
     selectname.style.borderColor = "red"
     selectname.style.outlineColor = "red"
     return false;
    }
     else if (age === ""){
        document.querySelector('#errorage').innerHTML = "please enter your age";
        let selectage = document.querySelector('#age');
        selectage.style.borderColor = "red"
        selectage.style.outlineColor = "red"
        return false;
     }
     else if (email === ""){
        document.querySelector('#erroremail').innerHTML = "please enter your email";
        let selectemail = document.querySelector('#email');
        selectemail.style.borderColor = "red"
        selectemail.style.outlineColor = "red"
        return false;
     }
     else if (number === ""){
        document.querySelector('#errornumber').innerHTML = "please enter your number";
        let selectnumber = document.querySelector('#number');
        selectnumber.style.borderColor = "red"
        selectnumber.style.outlineColor = "red"
        return false;
     }
     else if (date === ""){
      document.querySelector('#errordate').innerHTML = "please enter your birth date";
      let selectdate = document.querySelector('#date');
      selectdate.style.borderColor = "red"
      selectdate.style.outlineColor = "red"
      return false;
   }
   else if (password === ""){
      document.querySelector('#errorpassword').innerHTML = "please enter your password";
      let selectpassword = document.querySelector('#password');
      selectpassword.style.borderColor = "red"
      selectpassword.style.outlineColor = "red"
      return false;
   }
   else if (confirm_password === ""){
      document.querySelector('#errorcp').innerHTML = "please enter your confirm password";
      let selectconfirm_password = document.querySelector('#confirm_password');
      selectconfirm_password.style.borderColor = "red"
      selectconfirm_password.style.outlineColor = "red"
      return false;
   }
  
    
}
