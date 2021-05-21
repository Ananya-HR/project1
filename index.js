function openformm(){
     window.open("openform.html", "width=200,height=100");
   
}




function closeform(){
    location.href="http://127.0.0.1:5500/proodummy/dummy.html"
}
function incre(){
    if(document.getElementById("image").src="https://lh3.googleusercontent.com/pw/ACtC-3fktA5DQpYIQy2FMEl85cogjMResA_RKefmQKg56lPCIgFhgb8jyEiHS79xDSTREpoegwY2M1OocrTUioob-q0X_r0KxX8y4RRtXwBB3AEa7JtjIAJrBCTYeeF9VwTnQq6SzBKtIEN4gkFbCvDLVEGV=w1088-h442-no?authuser=0"){
        document.getElementById("image").src="https://lh3.googleusercontent.com/pw/ACtC-3cI75XiLGlz5t9nvjV6QhvPgX9PEkbEp1C0kC9WJ_O34EQ9K0pM_ZDq-3aZXBULqHUeDRtcC8YBYN22P2ckX5f2QMCXtbSVq_ZUDHqb71d3uvwidj8yKncxVekNNIfmQc4EiNTJtbSHHrHdXeUF87x5=w1064-h448-no?authuser=0";
    }
    
}
function decre(){
    if(document.getElementById("image").src="https://lh3.googleusercontent.com/pw/ACtC-3cI75XiLGlz5t9nvjV6QhvPgX9PEkbEp1C0kC9WJ_O34EQ9K0pM_ZDq-3aZXBULqHUeDRtcC8YBYN22P2ckX5f2QMCXtbSVq_ZUDHqb71d3uvwidj8yKncxVekNNIfmQc4EiNTJtbSHHrHdXeUF87x5=w1064-h448-no?authuser=0"){
        document.getElementById("image").src="https://lh3.googleusercontent.com/pw/ACtC-3fktA5DQpYIQy2FMEl85cogjMResA_RKefmQKg56lPCIgFhgb8jyEiHS79xDSTREpoegwY2M1OocrTUioob-q0X_r0KxX8y4RRtXwBB3AEa7JtjIAJrBCTYeeF9VwTnQq6SzBKtIEN4gkFbCvDLVEGV=w1088-h442-no?authuser=0";
    }
}

var nameflag=false;
var emailflag=false;
var phflag=false;
var pwdflag=false;
function validatename(){
    var user = document.getElementById("name1").value;
    if(user.length<5 || user.length>10){
        document.getElementById("un").innerHTML="Maximum 5 char and minimum 10 char";
        document.getElementById("un").style.display="block";
        
    }
    else{
        nameflag=true;
        document.getElementById("un").innerHTML=" ";
        document.getElementById("un").style.display="none";
       
    }
}
function validatemail(){
    var mailPattern = new RegExp("(?=.*@)(?=.+.com)");
    if(!(mailPattern.test(document.getElementById("email1").value))){
        document.getElementById("em").innerHTML="Email must contain @ and .com";
        document.getElementById("em").style.display="block";
    }
    else{
        emailflag=true;
        document.getElementById("em").innerHTML=" ";
        document.getElementById("em").style.display="none";
    }
}
function validateph(){
    var phpattern=new RegExp("(?=[0-9]{10})");
    if(!(phpattern.test(document.getElementById("number1").value))){
        document.getElementById("ph").innerHTML="Enter 10 numbers";
        document.getElementById("ph").style.display="block";
    }
    else{
        phflag=true;
        document.getElementById("ph").innerHTML=" ";
        document.getElementById("ph").style.display="none";
    }
}

function validatepwd(){
    var pwdpattern = new RegExp("(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&*])");
    if(!(pwdpattern.test(document.getElementById("password1").value))){
        document.getElementById("pa").innerHTML="weak password"
        document.getElementById("pa").style.display="block";

    }
    else{
        pwdflag=true;
        document.getElementById("pa").innerHTML=" ";
        document.getElementById("pa").style.display="none";
    }
}
function validation(){
    if(nameflag && emailflag && phflag && pwdflag){
        alert("registration succesfull");
        location.href="http://127.0.0.1:5500/proodummy/streaming.html";
    }
    else{
        alert("try again");
    }
}
function home(){
    location.href="http://127.0.0.1:5500/proodummy/dummy.html";
}
function displaymovies(){
    var city1=document.getElementById("city").value;
    if(city1=="Bangalore"){
        document.getElementById("img4").src="https://lh3.googleusercontent.com/pw/ACtC-3eV87tdx6lr3c2fpDUuQVRC3XEn1YDuVkPrxxHZoyr6H7iB9ibCuF9PDHHGqAZX-JQHlsl6ME6rLTkKYmloC00paSpZmm1Ad9fL7BK0-C4IavpurpmJ-NXxQGfxU6hR_OVfRf28w0jEYsVt3PWlOCfu=w300-h150-no?authuser=0";
        document.getElementById("name").innerHTML="Raj";
        document.getElementById("lang").innerHTML="Kannada";
    }
    else if(city1=="Amritsar"){
        document.getElementById("img4").src="https://lh3.googleusercontent.com/pw/ACtC-3edu4vSLowdCphW2XOlHxjwIAJwXwgIv-9f0buHtXVhEaH-mLI1-qgoViB3DB2dgmoJ3YXxbFP0P0mDJM43ON2AM_Pst5NL4gJV99munJSiP6Sot8fucs8vVS05Y1HJ6nyFU21E48tpbSRL0p0q8NAz=w300-h150-no?authuser=0";
        document.getElementById("name").innerHTML="JINDUA";
        document.getElementById("lang").innerHTML="Punjabi";
    }
    else if(city1=="Chennai"){
        document.getElementById("img4").src="https://lh3.googleusercontent.com/pw/ACtC-3cAzNASAp0YXf1215dfGR2smTKnV0Z1VfVOZ1CxsoHFgEUwujHwSYurvJGXNMEQRh4mTwh9tfKeYTkmg42A25u-2f3MjlU1oIco9Y6jb0zVMz3Z3Wai05BizEfA9u5gipqUnrY9LR7IKSv_1NviXb32=w300-h150-no?authuser=0";
        document.getElementById("name").innerHTML="BOGAN";
        document.getElementById("lang").innerHTML="Tamil";
    }
    else if(city1== "select"){

    }
    else{
        alert("oops!! something went wrong :(");
    }
}
function logout(){
    alert("Loged out sucessfully");
    location.href="http://127.0.0.1:5500/proodummy/dummy.html","https://lh3.googleusercontent.com/pw/ACtC-3eV87tdx6lr3c2fpDUuQVRC3XEn1YDuVkPrxxHZoyr6H7iB9ibCuF9PDHHGqAZX-JQHlsl6ME6rLTkKYmloC00paSpZmm1Ad9fL7BK0-C4IavpurpmJ-NXxQGfxU6hR_OVfRf28w0jEYsVt3PWlOCfu=w300-h150-no?authuser=0";
}
function booking(){
    var mywindow=window.open("booking.html");
    mywindow.document.getElementById("name");
    
}