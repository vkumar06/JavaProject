

$(function(){
    $('#c-form').submit(function() {
       if( document.cForm.first.value === "" )
         {
            alert( "Please provide your first name!" );
            document.cForm.first.focus() ;
             return false;}
         if( document.cForm.last.value === "" )
         {
            alert( "Please provide your last name!" );
            document.cForm.last.focus() ;
             return false;}
         if( document.cForm.message.value === "" )
         {
            alert( "Please fill the message!" );
            document.cForm.message.focus() ;
             return false;}
         var emailID = document.cForm.email.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         {
            alert("Please enter correct email ID");
            document.cForm.email.focus() ;
            return false;}
         
         else{      
            $('#thankyou_message').show();
             alert("form submitted");
             window.location('index.html');}


    });
   
});


         
     
