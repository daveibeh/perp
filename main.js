$(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ){
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
    });
});
//look for .mobile-nav
var mobileNav = document.querySelector(".mobile-nav");
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  mobileNav.classList.toggle("open");

});
