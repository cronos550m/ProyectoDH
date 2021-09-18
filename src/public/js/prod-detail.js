function openDesc(evt, desc) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(desc).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();



  

        $('.prod-detail-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
  fade: true,
  asNavFor: '.prod-detail-slider-nav',
  cssEase: 'ease-out',
  // responsive: [
  // {
  //   breakpoint: 1024,
  //   settings: {
  //     dots: false
  //   }
  // }]
});
       $('.prod-detail-slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.prod-detail-slider',
  arrows: false,
  dots: false,
  centerMode: true,
  focusOnSelect: true
});


    
