var name = document.getElementById("name") 
function validate()
{
if(validateEmail() && validatePassword() && validatePhoneNo()) alert("Form Successfully Submitted")
else
alert("Invalid input")
}

function validateEmail()
{
var email = document.getElementById("email").value; 
if(email.includes("@") && email.includes("."))
return true; 
else
return false;
}

function validatePassword()
{
var pass = document.getElementById("password").value; 
if(pass.length < 8)
return false 
else
return true;
}

function validatePhoneNo()
{
var phone_no = document.getElementById("number").value; 
flag = false
if(phone_no.length == 10) 
flag = true
else
flag = false
for(var i = 0;i<phone_no.length;i++)
{
if(!(phone_no[i]>='0' && phone_no[i]<='9')) flag = false
}
if(flag) return true 
else
return false
}
