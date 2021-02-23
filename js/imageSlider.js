jQuery(function () {

    var width = $(".image-slider-container").css("width");
    var height = (width * 5) / 6;
    $(".image-slider-container").css("height", `${height}px`);
    $(window).resize(function () {
      width = $(".image-slider-container").css("width");
      height = (width * 5) / 6;
      $(".image-slider-container").css("height", `${height}px`);
    });
  // console.log(h);
    $('.slider').on("input", function (e) {
      const sliderPos = e.target.value;
      $(".after-image").css("width", `${sliderPos}%`);
      $('.slider-button').css('left', `calc(${sliderPos}% - 21px)`)
  });


  //navigation
  $(".nav-aboutMe").on("click", function (e) {
      document.querySelector('.bio-wrapper').scrollIntoView({
      behavior: 'smooth'
      });
    });
  $(".nav-projects").on("click", function (e) {
    document.querySelector('.project-wrapper').scrollIntoView({
    behavior: 'smooth'
    });
  });
  $(".nav-exp").on("click", function (e) {
    document.querySelector('.edu-work-wrapper').scrollIntoView({
    behavior: 'smooth'
    });
  });
  $(".nav-contact").on("click", function (e) {
    document.querySelector('footer').scrollIntoView({
    behavior: 'smooth'
    });
  });
})

