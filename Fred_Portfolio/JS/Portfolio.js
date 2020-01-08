jQuery(document).ready(function(){   
    jQuery("a").on('click', function(event) {  
      if (this.Link !== "") {
        event.preventDefault();
        var Link = this.Link
          jQuery('html, body').animate({
           scrollTop: jQuery(Link).offset().top
         }, 2000, function(){
           window.location.Link = Link;
        });
      } 
    });
 });



   function openForm() {
     document.getElementById("myForm").style.display = "block";
   }
  
   function closeForm() {
     document.getElementById("myForm").style.display = "none";
     this.form();
   }
