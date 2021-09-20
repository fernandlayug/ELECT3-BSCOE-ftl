function validate(){
    if(document.myForm.Name.value =="") {
      document.getElementById("nameErr").innerHTML="Please enter your Fullname";
        document.mForm.Name.focus();
        return false;
    }

    if(document.myForm.account.value == "-1"){
        alert("Please provide your account type!");
        return false;
    }

    if (document.myForm.Age.value == ""){
        alert("Please provide your age!");
        document.myForm.Age.focus();
        return false;
    } else {
        var num = document.myForm.Age.value;
        if(isNaN(num)){
            alert("Please enter numeric values")
        }
    }

    if(document.myForm.Email.value == "") {
        document.getElementById("emailErr").innerHTML="Please enter your E-mail";
        document.myForm.Email.focus()
        return false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.Email.value) == false) {
            alert("Please enter a valid email address");
            document.myForm.Email.focus();
            return false;
        }
    }

    var firstpassword=document.myForm.password.value;
    var secondpassword=document.myForm.password2.value;
    if(firstpassword==secondpassword){
        return true;
    } else {
        alert("Password must be the same!");
        return false;
    }

 
}