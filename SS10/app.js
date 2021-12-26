function store() {
    let name = document.getElementById("name");
    let pw = document.getElementById("pw");
  
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
  
    let numbers = /[0-9]/g;
  
  
  
    if (name.value.length == 0 && pw.value.length == 0) {
      alert("Please fill in email and password")
    }
    else if (name.value.length == 0) {
      alert("Please fill your email");
    }
    else if (pw.value.length == 0) {
      alert("Please fill your password")
    }
    else if (pw.value.length < 8) {
      alert("Password Must be at least 8 characters long")
    }
    else if (!pw.value.match(lowerCaseLetters)) {
      alert("Please add 1 lowercase letter");
    }
    else if (!pw.value.match(upperCaseLetters)) {
      alert("Please add 1 uppercase letter");
    }
    else if (!pw.value.match(numbers)) {
      alert("Please add 1 number")
    }
    else {
      localStorage.setItem("email", name.value);
      localStorage.setItem("pw", pw.value);
      alert("Your account has been created")
    }
  
  }
  
  // Định nghĩa hàm check
  function check() {
    let storeName = localStorage.email;
    let storePw = localStorage.pw
    // lấy thành công email + password
  
    // C2:
    // let storePw = localStorage.getItem("pw")
  
    let userName = document.getElementById("userName");
    let userPw = document.getElementById("userPw");
    let userRemember = document.getElementById("rememberMe");
  
    if (userName.value == storeName
      &&
      userPw.value == storePw
    ) {
      // alert("You are logged in")
      toHomePage();
      // window.location.replace("http://stackoverflow.com");
  
    }
    else {
      alert("Error on login")
    }
  }
  
  
  function toHomePage() {
    window.location.href = "./trangchu.html"
  }