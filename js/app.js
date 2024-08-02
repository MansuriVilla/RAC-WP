$(document).ready(function () {
    $(".slider-default").owlCarousel({
      loop: true,
      nav: true,
      autoWidth:true,
      dots: false,
      margin:30,
      navText: ["<img src='./assets/icons/slider-arrow-left.svg'>","<img src='./assets/icons/slider-arrow-right.svg'>"],
      responsive: {
        
        576: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    });
  });


$(document).ready(function () {
    $(".slider-default-review").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      autoWidth:true,
      navText: ["<img src='./assets/icons/slider-arrow-left.svg'>","<img src='./assets/icons/slider-arrow-right.svg'>"],
      responsive: {
        576: {
          items: 1,
        },
        1000: {
          items: 2.3,
        },
      },
    });
  });
  
  function videoButton(){
    document.addEventListener('DOMContentLoaded', function() {
        var video = document.getElementById('custom-video');
        var playButton = document.getElementById('play-button');
      
        // Toggle play/pause when the button is clicked
        playButton.addEventListener('click', function() {
          if (video.paused) {
            video.play();
            playButton.classList.add('hidden'); // Hide the button when video is playing
          } else {
            video.pause();
            playButton.classList.remove('hidden'); // Show the button when video is paused
          }
        });
      
        // Pause video when the video itself is clicked
        video.addEventListener('click', function() {
          if (!video.paused) {
            video.pause();
            playButton.classList.remove('hidden'); // Show the button when video is paused
          }
        });
      
        // Show the button when the video ends
        video.addEventListener('ended', function() {
          playButton.classList.remove('hidden'); // Show button again
        });
      });
  }
 
  videoButton();




function tobottom(){
  $('html,body').animate({ scrollTop: ($('html').height())-($(window).height())}, 3000, 'easeInOutQuad')											 
}

