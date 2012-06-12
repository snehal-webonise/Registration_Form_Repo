function cleart()
{
	
    document.getElementById('firstname').value="";
    document.getElementById('email').value="";
    document.getElementById('age').value="";
    frm.sex[0].checked=false;
    frm.sex[1].checked=false;
    document.getElementById('address').value="";
    document.getElementById('descr').value="";
    document.getElementById('pincode').value="";
    
}

function nonEmpty1()
{
//Check empty fields
    if(document.getElementById('firstname').value=="" )
    {
	alert("Please enter Firstname");
	return false;
    }
    if(document.getElementById('email').value=="")
    {
	alert("Please enter email id");
	return false;
    }
    if(document.getElementById('age').value=="" )
    {
	alert("Please enter Age");
	return false;
    }
    var age = document.getElementById('age').value;
    var invalidChars="1234567890";
    for(i=0; i<age.length; i++)
    {
        if(invalidChars.indexOf(age.charAt(i))==-1)
	{
	    alert("Enter correct Age");
	    return false;
	}
    }
    if((frm.sex[0].checked==false)&&(frm.sex[1].checked==false))
    {
        alert ('Select Your Gender');
        return false;
    }
    if(document.getElementById('address').value=="")
    {
	alert("Please enter address");
	return false;
    }
    if(document.getElementById('descr').value=="")
    {
	alert("Please enter Description");
	return false;
    }
    if(document.getElementById('pincode').value=="")
    {
	alert("Please enter Pincode");
	return false;
    }
    var pin = document.getElementById('pincode').value;
    var invalidChars="1234567890";
    for(i=0; i<pin.length; i++)
    {
        if(invalidChars.indexOf(pin.charAt(i))==-1)
	{
	    alert("Enter correct Pincode");
	    return false;
	}
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

post_data();
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
function post_data()
{
 alert("hi");  
    var data1={
                "utf8":"✓",
                "authenticity_token":"TWq5wTGiDBnUuWj3t6Qte9EhTJOWpHViSJYZTLVtsL4=",
                "user":{
                            "name":$('#firstname').val().toString(),
                            "email":$('#email').val().toString(),
                            "age":$('#age').val().toString(),
                            "gender":$('input[name=sex]:checked').val().toString(),
                            "address":$('#address').val().toString(),
                            "description":$('#descr').val().toString(),
                            "pin":$('#pincode').val().toString()
                            },
                            "commit":"Create User"
                };
               
                $.ajax({
        type: "POST",
        url: "http://blooming-beach-2334.herokuapp.com/users",
        data: data1,
        dataType: "json",
        success: alert("success"),
    });
   
   alert(data1.toString());
  


}


	
