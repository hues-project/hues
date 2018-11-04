(function(){
  document.addEventListener("DOMContentLoaded", function(){
    carousel();

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


}());