function openformm() {
  location.href = "./openform.html";
  // TODO: convert to relative path
}

// you need to use relative paths
// "http://127.0.0.1:5500/openform.html" is a absolute path
// instead use this "./openform.html"

function closeform() {
  location.href = "./index.html";
  // TODO: convert to relative path
}
function incre() {
  if (
    (document.getElementById("image").src =
      "https://lh3.googleusercontent.com/pw/ACtC-3fktA5DQpYIQy2FMEl85cogjMResA_RKefmQKg56lPCIgFhgb8jyEiHS79xDSTREpoegwY2M1OocrTUioob-q0X_r0KxX8y4RRtXwBB3AEa7JtjIAJrBCTYeeF9VwTnQq6SzBKtIEN4gkFbCvDLVEGV=w1088-h442-no?authuser=0")
  ) {
    document.getElementById("image").src =
      "https://lh3.googleusercontent.com/pw/ACtC-3cI75XiLGlz5t9nvjV6QhvPgX9PEkbEp1C0kC9WJ_O34EQ9K0pM_ZDq-3aZXBULqHUeDRtcC8YBYN22P2ckX5f2QMCXtbSVq_ZUDHqb71d3uvwidj8yKncxVekNNIfmQc4EiNTJtbSHHrHdXeUF87x5=w1064-h448-no?authuser=0";
  }
}
function decre() {
  if (
    (document.getElementById("image").src =
      "https://lh3.googleusercontent.com/pw/ACtC-3cI75XiLGlz5t9nvjV6QhvPgX9PEkbEp1C0kC9WJ_O34EQ9K0pM_ZDq-3aZXBULqHUeDRtcC8YBYN22P2ckX5f2QMCXtbSVq_ZUDHqb71d3uvwidj8yKncxVekNNIfmQc4EiNTJtbSHHrHdXeUF87x5=w1064-h448-no?authuser=0")
  ) {
    document.getElementById("image").src =
      "https://lh3.googleusercontent.com/pw/ACtC-3fktA5DQpYIQy2FMEl85cogjMResA_RKefmQKg56lPCIgFhgb8jyEiHS79xDSTREpoegwY2M1OocrTUioob-q0X_r0KxX8y4RRtXwBB3AEa7JtjIAJrBCTYeeF9VwTnQq6SzBKtIEN4gkFbCvDLVEGV=w1088-h442-no?authuser=0";
  }
}

var nameflag = false;
var emailflag = false;
var phflag = false;
var pwdflag = false;
function validatename() {
  var user = document.getElementById("name1").value;
  if (user.length < 5 || user.length > 10) {
    document.getElementById("un").innerHTML =
      "Minimum 5 char and maximum 10 char";
    document.getElementById("un").style.display = "block";
  } else {
    nameflag = true;
    document.getElementById("un").innerHTML = " ";
    
  }
}
function validatemail() {
  var mailPattern = new RegExp("(?=.*@)(?=.+.com)");
  if (!mailPattern.test(document.getElementById("email1").value)) {
    document.getElementById("em").innerHTML = "Email must contain @ and .com";
    document.getElementById("em").style.display = "block";
  } else {
    emailflag = true;
    document.getElementById("em").innerHTML = " ";
    
  }
}
function validateph() {
  var phpattern = new RegExp("(?=[0-9]{10})");
  if (!phpattern.test(document.getElementById("number1").value)) {
    document.getElementById("ph").innerHTML = "Enter 10 numbers";
    document.getElementById("ph").style.display = "block";
  } else {
    phflag = true;
    document.getElementById("ph").innerHTML = " ";
    
  }
}

function validatepwd() {
  var pwdpattern = new RegExp("(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&*])");
  if (!pwdpattern.test(document.getElementById("password1").value)) {
    document.getElementById("pa").innerHTML = "weak password";
    document.getElementById("pa").style.display = "block";
  } else {
    pwdflag = true;
    document.getElementById("pa").innerHTML = " ";
    
  }
}
function validation() {
  if (nameflag && emailflag && phflag && pwdflag) {
    debugger;
    localStorage.setItem('user_name',document.getElementById("name1").value);
    localStorage.setItem('user_password',document.getElementById("password1").value);

    alert("registration succesfull");
    location.href = "./streaming.html";
  } else {
    alert("Enter valid details");
  }
}
function home() {
  location.href = "./index.html";
}
function displaymovies() {
  var city1 = document.getElementById("city").value;
  if (city1 == "Bangalore") {
    document.getElementById("img4").src =
      "https://lh3.googleusercontent.com/pw/ACtC-3eV87tdx6lr3c2fpDUuQVRC3XEn1YDuVkPrxxHZoyr6H7iB9ibCuF9PDHHGqAZX-JQHlsl6ME6rLTkKYmloC00paSpZmm1Ad9fL7BK0-C4IavpurpmJ-NXxQGfxU6hR_OVfRf28w0jEYsVt3PWlOCfu=w300-h150-no?authuser=0";
    document.getElementById("name").innerText = "Raj";
    document.getElementById("lang").innerText = "Kannada";
  } else if (city1 == "Amritsar") {
    document.getElementById("img4").src =
      "https://lh3.googleusercontent.com/pw/ACtC-3edu4vSLowdCphW2XOlHxjwIAJwXwgIv-9f0buHtXVhEaH-mLI1-qgoViB3DB2dgmoJ3YXxbFP0P0mDJM43ON2AM_Pst5NL4gJV99munJSiP6Sot8fucs8vVS05Y1HJ6nyFU21E48tpbSRL0p0q8NAz=w300-h150-no?authuser=0";
    document.getElementById("name").innerText = "JINDUA";
    document.getElementById("lang").innerText = "Punjabi";
  } else if (city1 == "Chennai") {
    document.getElementById("img4").src =
      "https://lh3.googleusercontent.com/pw/ACtC-3cAzNASAp0YXf1215dfGR2smTKnV0Z1VfVOZ1CxsoHFgEUwujHwSYurvJGXNMEQRh4mTwh9tfKeYTkmg42A25u-2f3MjlU1oIco9Y6jb0zVMz3Z3Wai05BizEfA9u5gipqUnrY9LR7IKSv_1NviXb32=w300-h150-no?authuser=0";
    document.getElementById("name").innerText = "BOGAN";
    document.getElementById("lang").innerText = "Tamil";
  } else if (city1 == "select") {
  } else {
    alert("oops!! something went wrong :(");
  }
}

function display_name(){
  
  var user=localStorage.user_name;
  var upper = user.charAt(0).toUpperCase();
  var newUser = upper+user.substr(1,user.length);
    document.getElementById("display_name1").innerText ="Welcome "+newUser;
}
function logout(event) {
  event.preventDefault();
  localStorage.removeItem('user_name');
  localStorage.removeItem('user_password');
  alert("Loged out sucessfully");
  location.href = "./index.html";
}
function booking(currentMovie) {
  let array = [];
  document.querySelectorAll(".arrayi").forEach(function (element) {
    const val = parseInt(element.value);
    array.push(val);
  });
  console.log(array);
  //
  //   window.open("./booking.html?arrayindex=array");
  window.open(`./booking.html?idx=${currentMovie}`);
}
