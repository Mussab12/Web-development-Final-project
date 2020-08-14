function namevalidation()
{
	var name=document.getElementById("firstname").value;
	if(name.length>1&&name.length<=15)
	{
		document.getElementById("namevalid").style.color="green";
		document.getElementById("namevalid").innerHTML="<strong>valid name</strong>";
	}
	else{
		document.getElementById("namevalid").style.color="red";
		document.getElementById("namevalid").innerHTML="<strong>Please enter characters between 2 to 15</strong>";
	}
	
	
	
	
	
	
	
	
}

function passwordcheck()
{
	var pass=document.getElementById("psw").value;
	var validitypass=/^[A-Za-z0-9]{7}$/;//password should be of seven characters to submit the form//
	if(!pass.match(validitypass))
	{
		document.getElementById("message2").style.color="red";
		document.getElementById("message2").innerHTML="<strong>please enter strong password<strong>";
		return false;
	}
	else
	{	document.getElementById("message2").style.color="green";
		document.getElementById("message2").innerHTML="<strong>valid password</strong>";
	return true;
	}	
	
	
	
	
}
function formsubmission()
{
	
	var pass1=document.getElementById("psw").value;
	var pass2=document.getElementById("psw2").value;
	var mobile=document.getElementById("phoneno").value;
	var pattern=/^\d{12}$/
	if(!mobile.match(pattern)||pass1!=pass2)
	{
		document.getElementById("message").style.color="red";
		document.getElementById("message").innerHTML="<strong>invalid phone number please enter 12 digit phone number</strong>";
		alert("password not matched");
		return false;
	}
	else{
		document.getElementById("message").style.color="green";
		document.getElementById("message").innerHTML="<strong>valid phone number</strong>";
		document.getElementById("submit1").innerHTML="<h1>Form Submitted</h1>";
		alert("password matched");
		return true;
	}
	
	
}
