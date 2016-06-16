// Closes the sidebar menu
$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Map scrolling behaviour
$(document).ready(function() {
  $('#map_iframe').addClass('scrolloff');
  $('#map').on('click', function () {
    $('#map_iframe').removeClass('scrolloff');
  });

  $('#map_iframe').mouseleave(function  () {
    $('#map_iframe').addClass('scrolloff');
  });
});

$('#gulp').tooltip();
$('#angular').tooltip();
$('#dotnet').tooltip();
$('#bootstrap').tooltip();
$('#bower').tooltip();
$('#csharp').tooltip();
$('#css3').tooltip();
$('#sublime').tooltip();
$('#firebase').tooltip();
$('#git').tooltip();
$('#github').tooltip();
$('#html5').tooltip();
$('#sass').tooltip();
$('#javascript').tooltip();
$('#jquery').tooltip();
$('#visualstudio').tooltip();
$('#npm').tooltip();
$('#oauth').tooltip();
$('#sql').tooltip();
$('#jasmine').tooltip();