document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("loaded");
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });

  //with click
  $(".journeyTitle span").click(function(e){
    e.stopPropagation();
    $(this).parent().find(".medicalJourneyList").slideToggle(500);
    $(this).parent().siblings(".journeyCardReview").fadeToggle(300);
    console.log($(this).parent());
  });
  $("body").click(function(e){
    e.stopPropagation();
    console.log("hello");
    $(".medicalJourneyList").slideUp(500);
    $(".journeyCardReview").fadeIn(300);
  })
  // learnMoreNblueStrip
  $(".learnMoreNblueStrip .learnMore").click(function() {
    $('html,body').animate({
        scrollTop: $(".whyFD").offset().top},
        'slow');
        console.log(2);
});
  $(".learnMore").hover(function() {
    var parentNext = $(this).parent().next();
    $('html,body').animate({
        scrollTop: parentNext.offset().top},
        'slow');
        console.log(2);
});


$('.locationInput input').focus(function(){
  $(this).removeAttr('placeholder');
  });
$('.locationInput input').blur(function(){
  $(this).attr('placeholder','Provider LookUP - Zipcode');
  });

  // with hover 
  // $(".journeyCard").hover(function(){
  //   $(this).find(".medicalJourneyList").slideToggle(300);
  //   $(this).find(".journeyCardReview").fadeToggle(200);
  //   console.log($(this).parent());
  // });

  // var divisor = $(".divisor"),
  // slider = document.getElementById("slider");
  // function moveDivisor() { 
  //   console.log(divisor);
  //   divisor[0].style.width = slider.value+"%";
  //   divisor[1].style.width = slider.value+"%";
  // }

});
