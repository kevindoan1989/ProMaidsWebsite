let isshowfirst = false;

$(document).ready(function(){

  
  //openForm();
  // jQuery methods go here...
  var isActivePopup = false;
  //Get the button
  let mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  if(isshowfirst == false)
  { 
    openFormCenterPopup();
    setCookie('POPUPINFO','1',365) ;
  }
  $(".detaildesc").trigger('mouseenter');

  $('.detaildesc').hover(function(e) {
      
      if(e.currentTarget.id == 'maids1'){
        document.getElementById('img_maids1').style.display = "";
        document.getElementById('img_maids1').style.display = "block";
        document.getElementById('img_maids2').style.display = "";
        document.getElementById('img_maids2').style.display = "none";
        document.getElementById('img_maids3').style.display = "";
        document.getElementById('img_maids3').style.display = "none";
        document.getElementById('img_maids4').style.display = "";
        document.getElementById('img_maids4').style.display = "none";
      } else if (e.currentTarget.id == 'maids2'){
        document.getElementById('img_maids1').style.display = "";
        document.getElementById('img_maids1').style.display = "none";
        document.getElementById('img_maids2').style.display = "";
        document.getElementById('img_maids2').style.display = "block";
        document.getElementById('img_maids3').style.display = "";
        document.getElementById('img_maids3').style.display = "none";
        document.getElementById('img_maids4').style.display = "";
        document.getElementById('img_maids4').style.display = "none";
      }else if (e.currentTarget.id == 'maids3'){
        document.getElementById('img_maids1').style.display = "";
        document.getElementById('img_maids1').style.display = "none";
        document.getElementById('img_maids2').style.display = "";
        document.getElementById('img_maids2').style.display = "none";
        document.getElementById('img_maids3').style.display = "";
        document.getElementById('img_maids3').style.display = "block";
        document.getElementById('img_maids4').style.display = "";
        document.getElementById('img_maids4').style.display = "none";
      }else if (e.currentTarget.id == 'maids4'){
        document.getElementById('img_maids1').style.display = "";
        document.getElementById('img_maids1').style.display = "none";
        document.getElementById('img_maids2').style.display = "";
        document.getElementById('img_maids2').style.display = "none";
        document.getElementById('img_maids3').style.display = "";
        document.getElementById('img_maids3').style.display = "none";
        document.getElementById('img_maids4').style.display = "";
        document.getElementById('img_maids4').style.display = "block";
      }
  });
  $('.quickcontact').on("click",function(){
    if(isActivePopup == true)
    {
      closeForm();
      isActivePopup = false;
      document.getElementById("contactid").style.backgroundColor = "#338F00";
      
    } else {
      openForm();
      isActivePopup = true;
      document.getElementById("contactid").style.backgroundColor = "#888888";
    }
    //post code
  })
  
  $('.btnClosed').on("click",function(){
      closeForm();
      isActivePopup = false;
      document.getElementById("contactid").style.backgroundColor = "#338F00";
  })


  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }

  function openFormCenterPopup() {
      // let widthPop = $('.form-popup').width();
      // let heightPop = $('.form-popup').height();
      // let widthpar = -widthPop/2 + 'px' ;
      // let hightpar = -heightPop+ 'px' ;

      // document.getElementById('myForm').style.top = '50%';
      // document.getElementById('myForm').style.marginTop = -heightPop/2 + 'px';
      // document.getElementById('myForm').style.left = '55%';
      // document.getElementById('myForm').style.marginLeft = hightpar;
      // document.getElementById("myForm").style.display = "block" ;
      // document.getElementById("myForm").style.maxWidth = "800px" ;
      // document.getElementById("myForm").style.minHeight = "300px" ;
      // document.getElementById("myForm").style.maxHeight = "500px" ;
      // document.getElementById("myForm").style.position = "fixed" ;
      // document.getElementById("myForm").style.boxShadow = "5px 5px #f1f1f1" ;
      openForm();
      isshowfirst = true;
  }

const counters = document.querySelectorAll('.value-count');
const speed = 1000;
counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   animate();
});


});
// (function($) {

// 	"use strict";
//   // Form
// 	var contactForm = function() {
// 		if ($('#contactForm').length > 0 ) {
// 			$( "#contactForm" ).validate( {
// 				rules: {
// 					name: "required",
// 					subject: "required",
// 					email: {
// 						required: true,
// 						email: true
// 					},
// 					message: {
// 						required: true,
// 						minlength: 5
// 					}
// 				},
// 				messages: {
// 					name: "Please enter your name",
// 					subject: "Please enter your subject",
// 					email: "Please enter a valid email address",
// 					message: "Please enter a message"
// 				},
// 				/* submit via ajax */
				
// 				submitHandler: function(form) {		
// 					var $submit = $('.submitting'),
// 						waitText = 'Submitting...';

// 					$.ajax({   	
// 				      type: "POST",
// 				      url: "php/sendEmail.php",
// 				      data: $(form).serialize(),

// 				      beforeSend: function() { 
// 				      	$submit.css('display', 'block').text(waitText);
// 				      },
// 				      success: function(msg) {
// 		               if (msg == 'OK') {
// 		               	$('#form-message-warning').hide();
// 				            setTimeout(function(){
// 		               		$('#contactForm').fadeIn();
// 		               	}, 1000);
// 				            setTimeout(function(){
// 				               $('#form-message-success').fadeIn();   
// 		               	}, 1400);

// 		               	setTimeout(function(){
// 				               $('#form-message-success').fadeOut();   
// 		               	}, 8000);

// 		               	setTimeout(function(){
// 				               $submit.css('display', 'none').text(waitText);  
// 		               	}, 1400);

// 		               	setTimeout(function(){
// 		               		$( '#contactForm' ).each(function(){
// 											    this.reset();
// 											});
// 		               	}, 1400);
			               
// 			            } else {
// 			               $('#form-message-warning').html(msg);
// 				            $('#form-message-warning').fadeIn();
// 				            $submit.css('display', 'none');
// 			            }
// 				      },
// 				      error: function() {
// 				      	$('#form-message-warning').html("Something went wrong. Please try again.");
// 				         $('#form-message-warning').fadeIn();
// 				         $submit.css('display', 'none');
// 				      }
// 			      });    		
// 		  		} // end submitHandler

// 			});
// 		}
// 	};
// 	contactForm();

// })(jQuery);



// <!-- đóng/mở menu bar -->
// var header = document.getElementById("navbar_mobile");
// var menuMobile = document.getElementById("mobile-menu");
// var toggle = false;
// menuMobile.onclick = function () {
//   if (header.style.display === "" || header.style.display === "none") {
//     header.style.display = "block";
//   } else {
//     header.style.display = "none";
//   }
// };

