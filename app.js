var name = document.getElementById("name") ;
function validate()
{
if(validateEmail() && validatePassword()) 
    alert("Form Successfully Submitted");
else
alert("Invalid input");
}

function validateEmail()
{
var email = document.getElementById("email").value; 
if(email.includes("@") && email.includes(".com"))
return true; 
else
return false;
}

function validatePassword()
{
/*var pass = document.getElementById("password").value; 
if(pass.length < 8)
return false 
else
return true;*/
const pass = document.getElementById("password").value;
   let number_capital_letters = 0 ,number_small_letters = 0 , number_digits = 0;
   let number_special_characters = 0;
   let flag = true;
   if(pass.length <8)
   {
    alert('The number of characters must be minimum 8');
    flag = false;
    return false;
   }
   for(let i = 0;i<pass.length;i++)
   {
    if(pass[i]>='a' && pass[i]<='z')
        number_small_letters++;
    else if(pass[i]>='A' && pass[i]<='Z')
        number_capital_letters++;
    else if(pass[i]>='0' && pass[i]<='9')
        number_digits++;
    else
        number_special_characters++;
   }
   if(number_capital_letters >=1 && number_small_letters >=1 && number_digits >=1 && number_special_characters >=1)
    {
      flag = true;
    }
   else{
    if(number_capital_letters <1)
       alert('Minimum number of capital letters must be 1');
    if(number_small_letters <1)
       alert('Minimum number of small letters must be 1');
    if(number_digits <1)
       alert('Minimum number of digits must be 1');
    if(number_special_characters <1)
       alert('Minimum number of special characters must be 1');
    flag = false;
   }
   if(flag)
    return true;
   else
    return false;
}

/*
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
*/