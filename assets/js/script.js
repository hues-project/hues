(function(){
  document.addEventListener("DOMContentLoaded", function(){
    carousel();

    window.addEventListener('load', function(){
      loader();
    });

    window.addEventListener("scroll", function () {
      videoScroll();
    });
  });

  function carousel(){
    const elem = document.getElementById('carousel');
    const flkty = new Flickity(elem, {
      cellAlign: 'left',
      autoPlay: 3000,
      wrapAround: true,
      accessibility: false,
      prevNextButtons: false
    });
  }

  const video = document.getElementById("video");
  function videoScroll() {
    video.style.left =  -window.pageXOffset + "px";
  }

  function loader(){
    const loader = document.getElementById("loader");
    setTimeout(function(){
      loader.classList.add("hidden");
    }, 1500);
  }

}());