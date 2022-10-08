(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
})(jQuery);

// Fungsi Tombol Kirim Kontak
const sendBtn = document.querySelector(".sendBtn");
const alert = document.querySelector(".alert-contact");
const btnClose = document.querySelector(".btn-close");

// Tombol Close Alert
btnClose.addEventListener("click", () => {
  alert.style.left = "150vw";
});

// Tombol Kirim
sendBtn.addEventListener("click", e => {
  e.preventDefault();

  // alert.style.display = "block";
  // alert.style.transition = "0.5s";
  alert.style.left = "50%";

  setTimeout(() => {
    // alert.style.display = "none";
    // alert.style.transition = "0s";
    alert.style.left = "150vw";
  }, 7000);
});
