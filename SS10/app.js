//store.
function store(){
    let name = document.getElementById("name");
    let pw = document.getElementById("name");

    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;

    let numbers = /[0-9]/g;

    if(name.ariaValueMax.length == 0){
        alert("Please fill out the email");
    } 
    else if(pw.ariaValueMax.length == 0) {
        alert ("Please fill out your password");
    }
    else if(name.value.length == 0 && pw.value.length == 0){
        alert("Please fill out your password and Email");
    }
    else if(pw.value.length < 8){
        alert("Password must be at least 8 characters long");
    }
    else if(!pw.value.match(lowerCaseLetters)){
        alert("Please add at least 1 lower case letter")
    }
    else if(!pw.value.match(upperCaseLetters)){
        alert("Please add at least 1 upper case letter")
    }
    else if(!pw.value.match(numbers)){
        alert("Please add at least 1 number")
    }
    else{
        localStorage.setItem("email", name.value);
        localStorage.setItem("pw", pw.value)
        alert("Your account has been created")
    }

}