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
  
  function videoButton() {
    document.addEventListener('DOMContentLoaded', function() {
        var video = document.getElementById('custom-video');
        var playButton = document.getElementById('play-button');
        var videoInner = document.querySelector('.video-inner');

        function togglePlayPause() {
            if (video.paused) {
                video.play();
                playButton.classList.add('hidden'); // Hide the button when video is playing
                videoInner.classList.add('no-overlay'); // Hide the overlay
            } else {
                video.pause();
                playButton.classList.remove('hidden'); // Show the button when video is paused
                videoInner.classList.remove('no-overlay'); // Show the overlay
            }
        }

        // Toggle play/pause when the play button is clicked
        playButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click event from bubbling up to video
            togglePlayPause();
        });

        // Pause video and show overlay when clicking anywhere on the video
        video.addEventListener('click', function() {
            if (!video.paused) {
                togglePlayPause();
            }
        });

        // Show the play button and overlay when the video ends
        video.addEventListener('ended', function() {
            playButton.classList.remove('hidden'); // Show button again
            videoInner.classList.remove('no-overlay'); // Show the overlay again
        });

        // Ensure that clicking outside the play button but inside video area pauses the video
        videoInner.addEventListener('click', function(event) {
            if (!video.paused) {
                togglePlayPause();
            }
        });
    });
}

videoButton();




function tobottom(){
  $('html,body').animate({ scrollTop: ($('html').height())-($(window).height())}, 3000, 'easeInOutQuad')											 
}

