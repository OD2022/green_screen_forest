function validate() {
  var email = document.getElementById('email').value;
  var emailRGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  var emailResult = emailRGEX.test(email);

  var password = document.getElementById('password').value;
  var passwordRGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  var passwordResult = passwordRGEX.test(password);

  if (emailResult == false) {
    var box = document.getElementById('email');
    box.style.borderWidth = '2px';
    box.style.borderColor = "#ff0000";
    alert('Please enter a valid email address');
    return false;
  }
  else {
    var box = document.getElementById('email');
    box.style.borderWidth = '2px';
    box.style.borderColor = "#0FFF50";
  }

  if (passwordResult == false) {
    var box2 = document.getElementById('password');
    box2.style.borderWidth = '2px';
    box2.style.borderColor = "#ff0000";
    alert('Your password must be:\nAt least one upper case English letter\nAt least one lower case English letter\nAt least one digit\nAt least one special character\nMinimum eight characters in length');
    return false;
  }
  else {
    var box2 = document.getElementById('email');
    box2.style.borderWidth = '2px';
    box2.style.borderColor = "#0FFF50";
  }
}




