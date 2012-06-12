function cleart()
{
	
    document.getElementById('firstname').value="";
    document.getElementById('lastname').value="";
    document.getElementById('address').value="";
    document.getElementById('contact').value="";
    document.getElementById('email').value="";
}
function nonEmpty1()
{
//Check empty fields
    if(document.getElementById('firstname').value=="" )
    {
	alert("Please enter Firstname");
	return false;
    }
    if(document.getElementById('lastname').value=="" )
    {
	alert("Please enter Lastname");
	return false;
    }
    if(document.getElementById('address').value=="")
    {
	alert("Please enter address");
	return false;
    }
    if(document.getElementById('contact').value=="")
    {
	alert("Please enter contact number");
	return false;
    }
    if(document.getElementById('email').value=="")
    {
	alert("Please enter email id");
	return false;
    }
//Validate contact no. field	
    var contactno = document.getElementById('contact').value;
    var invalidChars="1234567890";
    for(i=0; i<contactno.length; i++)
    {
        if(invalidChars.indexOf(contactno.charAt(i))==-1)
	{
	    alert("Enter correct number");
	    return false;
	}
    }
    if(contactno.length < 10)
    {
	alert("Mobile number must be 10 digit.");
	return false;
    }
    if(contactno.length > 10)
    {
	alert("Mobile number must be 10 digit.");
	return false;
    }
	 
//validation for email id
    var emailid1 = document.getElementById('email').value;
    if(emailid1!="")
    {
        var emailid = document.getElementById('email').value;
	if(!validatemail(emailid))
	{
	    alert("Invalid  email ID");
	    return false;
	}
     }
	
}	

function validatemail(txt)
{
// Syntactical validations of Email ID
    var email = new String();
    var atIndex,firstPart,secondPart;
    var invalidChars = new String();
    invalidChars="@~`!#$%^&*()+=|\{}[]:;\"'<,?/";
    var i;
    email = txt;
// checking '@'
    atIndex = email.indexOf('@');
    firstPart = email.substring(0,atIndex);
    secondPart = email.substring(atIndex+1,email.length);
	
// checking number of dots
    var count=0;
    dotIndex=secondPart.indexOf(".");
    for(i=0;i<secondPart.length;i++)
    {
        if(secondPart.charAt(i)==".")
	count++;
    }
    if(count>2 || count==0)
	 return false;

// checking for invalid chars
    for(i=0;i<firstPart.length;i++)
	if(invalidChars.indexOf(firstPart.charAt(i))!=-1)
	return false;
	
    for(i=0;i<secondPart.length;i++)
	if(invalidChars.indexOf(secondPart.charAt(i))!=-1)
	return false;

// remove leading spaces
    while(firstPart.charAt(0)==' ')
	firstPart = firstPart.substring(1,firstPart.length);

// remove trailing spaces	
    while(secondPart.charAt(secondPart.length-1)==' ')
	secondPart = secondPart.substring(0,(secondPart.length-2));
	tempString=secondPart;
	
// checking for consecutive dots
    dotIndex=secondPart.indexOf(".");
    if(dotIndex==0||dotIndex==secondPart.length-1)
	return false;
    else
    {
	tempString=secondPart.substring(dotIndex+1,secondPart.length)
	dotIndex=tempString.indexOf(".");
	if(dotIndex==0||dotIndex==tempString.length-1)
	    return false;
     }

    if(  (atIndex==-1) ||   (firstPart.indexOf(' ')!=-1) || (secondPart.indexOf(' ')!=-1))
	 return false;
    else
    {
	 return true;
    }
}
