$(window).on("load", function () {
  $(".loader")
    .delay(200)
    .fadeOut(2000, function () {
      $("body").css("overflow", "auto");
    });
});

$(document).ready(function () {
  "use strict";
  let isRtl = $('html[lang="ar"]').length > 0;
  // when click to responsive btn show ul and overlay
  $(".nav-btn").click(function () {
    $(this).addClass("active");
    $(".nav-links").addClass("active");
    $(".nav-overlay").addClass("show");
  });

  // when i click on overlay remove class show and remove ul

  $(".nav-overlay").click(function () {
    $(".nav-btn").removeClass("active");
    $(".nav-links").removeClass("active");
    $(".nav-overlay").removeClass("show");
    $(".subsections-menu").removeClass("show");
    $(".main-subsection-ul").removeClass("show");
    $(".main-title-link").removeClass("show");
  });

  // select-2
  $(".select-plugin").select2({
    dir: isRtl ? "rtl" : "ltr",
  });

  $(".select").select2({
    dir: isRtl ? "rtl" : "ltr",
  });

  $(':input[type="number"]').on("input", function () {
    var nonNumReg = /[^0-9]/g;
    $(this).val($(this).val().replace(nonNumReg, ""));
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // when click icon search in side menu bottom
  $(".input-nav .icons .icon-filter").on("click", function () {
    $(".input-nav .form-groub").addClass("show");
  });

  // when click icon close in side menu bottom
  $(".responsive-filter-x").on("click", function () {
    $(".input-nav .form-groub").removeClass("show");
  });

  // start to main slider
  $(".main_slider").owlCarousel({
    items: 1,
    loop: true,
    rtl: isRtl,
    margin: 0,
    nav: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    responsive: {
      320: {
        autoplay: true,
        loop: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
      },

      600: {
        items: 1,
        autoplay: false,
        loop: false,
      },
    },
  });

  // click button discount
  $(".get-discount .discount-title").on("click", function () {
    $(".section-img").addClass("show");
    $(this).parents(".get-discount").addClass("show");
  });

  $(".get-discount .hint-close").on("click", function () {
    $(".section-img").removeClass("show");
    $(this).parents(".get-discount").removeClass("show");
  });

  $(".fav-icon").on("click", function () {
    $(this).toggleClass("active");
    $(this).toggleClass("far, fas");
  });

  // start to banner slider
  $(".banner_slider").owlCarousel({
    items: 1,
    loop: false,
    rtl: isRtl,
    margin: 10,
    nav: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    responsive: {
      320: {
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
      },
    },
  });

  // start to offer slider
  $(".offer_slider").owlCarousel({
    items: 5,
    loop: false,
    // center: true,
    rtl: isRtl,
    margin: 0,
    nav: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: [
      "<i class='fas fa-angle-right'></i>",
      "<i class='fas fa-angle-left'></i>",
    ],
    responsive: {
      320: {
        items: 2,
        autoplay: true,
        loop: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        nav: false
      },

      375: {
        items: 3,
        autoplay: true,
        loop: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        nav: false
      },

      425: {
        items: 3,
        autoplay: true,
        loop: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        nav: false
      },

      768: {
        items: 3,
      },

      1024: {
        items: 5,
      },

      2500: {
        items: 5,
      },
    },
  });

  // start to main_banner_slider
  $(".main_banner_slider").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    rtl: isRtl,
    margin: 10,
    nav: false,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
  });

  // start to category-slider
  $(".category-slider").owlCarousel({
    items: 3,
    loop: false,
    rtl: isRtl,
    dots: false,
    margin: 30,
    nav: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    navText: [
      "<i class='fas fa-angle-right'></i>",
      "<i class='fas fa-angle-left'></i>",
    ],
    responsive: {
      320: {
        items: 1,
        nav: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
      },

      768: {
        items: 2,
      },

      1024: {
        items: 3,
      },

      1440: {
        items: 3,
      },
    },
  });

  // show list subsections-menu in responsive by click
  $(".main-nav-link .hint-link-cursor").on("click", function () {
    // $(this).parents(".main-nav-link").find(".subsections-menu").addClass("show");
    $(this).parents(".main-nav-link").find(".main-subsection-ul").removeClass("show");
  });

  // show list subsections-menu in responsive by click
  $(".hint-hover .hint-bar").on("click", function () {
    $(this).parents('.hint-hover').find(".main-title-link").removeClass("show");
    if (
      $(this)
        .parents(".hint-hover")
        .find(".main-subsection-ul")
        .hasClass("show")
    ) {
      $(this)
        .parents(".hint-hover")
        .find(".main-subsection-ul")
        .removeClass("show");
    } else {
      $(this)
      .parents(".hint-hover").find(".main-subsection-ul").removeClass("show");
      $(this)
        .parents(".hint-hover")
        .find(".main-subsection-ul")
        .toggleClass("show");
    }
  });

  $(".subsection-list .top-title-link").on("click", function () {
    // $(".main-title-link").removeClass('show');
    $(this)
      .parents(".subsection-list")
      .siblings()
      .find(".main-title-link")
      .removeClass("show");
    $(this)
      .parents(".subsection-list")
      .find(".main-title-link")
      .toggleClass("show");
  });

  // toggle arrow collcpse
  $(".main-section-collapse").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  // click to btn-filter to show filter-bar
  $(".filter-category .btn-filter").on("click", function () {
    $(".filter-bar").addClass("active");
    $(".overlay-filter").addClass("show");
  });

  // click to overlay-filter and icon close, to close filter-bar
  $(".overlay-filter, .close-filter").on("click", function () {
    $(".filter-bar").removeClass("active");
    $(".overlay-filter").removeClass("show");
  });

  // start to success- slider
  $(".product-details-slid").owlCarousel({
    items: 1,
    loop: true,
    video: true,
    lazyLoad: true,
    merge: true,
    center: true,
    rtl: isRtl,
    margin: 10,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    nav: false,
    dots: false,

    onTranslate: function () {
      $(".owl-item")
        .find("video")
        .each(function () {
          this.pause();
        });
    },
  });

  // toggle class active(opacity) when  slide
  $(".preview-images .success-img").on("click", function () {
    $(".preview-images .success-img").removeClass("active");
    $(this).addClass("active");
  });

  $(".reviews-slid").owlCarousel({
    items: 1,
    loop: true,
    rtl: isRtl,
    margin: 10,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    nav: false,
    dots: true,
  });

  $(".subsc-video").owlCarousel({
    items: 3,
    loop: true,
    rtl: isRtl,
    dots: false,
    margin: 10,
    autoWidth: true,
    video: true,
    nav: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    navText: [
      "<i class='fas fa-angle-right'></i>",
      "<i class='fas fa-angle-left'></i>",
    ],
    responsive: {
      320: {
        items: 1,
        autoWidth: false,
        nav: false,
        // autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
      },

      768: {
        items: 2,
      },

      1024: {
        items: 3,
      },

      1440: {
        items: 3,
      },
    },
  });

  // start to subsc_slider
  $(".subsc_slider").owlCarousel({
    items: 3,
    loop: true,
    rtl: isRtl,
    margin: 10,
    autoWidth: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    nav: true,
    dots: false,
    responsive: {
      320: {
        items: 1,
        autoWidth: false,
        nav: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
      },
      1440: {
        items: 3,
      },
      768: {
        items: 2,
      },
    },
    navText: [
      "<i class='fas fa-angle-right'></i>",
      "<i class='fas fa-angle-left'></i>",
    ],
    
  });

    // start to info-address
    $(".info-address").owlCarousel({
      items: 4,
      loop: false,
      rtl: isRtl,
      margin: 15,
      autoWidth: true,
      autoplaySpeed: 1000,
      autoplayTimeout: 2000,
      smartSpeed: 1000,
      nav: true,
      dots: false,
      responsive: {
        320: {
          autoWidth: false,
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 2
        },
        1440: {
          items: 4
        }
      },
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      
    });

    $(".sec-address-slider").owlCarousel({
      items: 5,
      loop: true,
      rtl: isRtl,
      margin: 10,
      autoWidth: true,
      autoplaySpeed: 1000,
      autoplayTimeout: 2000,
      smartSpeed: 1000,
      nav: true,
      dots: false,
      responsive: {
        320: {
          autoWidth: false,
          items: 1
        },
        768: {
          items: 3
        },
        1024: {
          items: 4
        },
        1440: {
          items: 5
        }
      },
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      
    });

    $(".payment-card-slider").owlCarousel({
      items: 3,
      loop: true,
      rtl: isRtl,
      margin: 10,
      autoplaySpeed: 1000,
      autoplayTimeout: 2000,
      smartSpeed: 1000,
      nav: true,
      dots: false,
      responsive: {
        320: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        },
        1440: {
          items: 3
        }
      },
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      
    });

    $(".payment-method-slider").owlCarousel({
      items: 4,
      // loop: true,
      rtl: isRtl,
      margin: 10,
      autoplaySpeed: 1000,
      autoplayTimeout: 2000,
      smartSpeed: 1000,
      nav: true,
      dots: false,
      responsive: {
        320: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        },
        1440: {
          items: 4
        }
      },
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      
    });

    // start to store-followers-slide
    $('.store-followers-slid').owlCarousel({
      items: 3,
      loop: false,
      rtl: isRtl,
      margin: 0,
      autoplaySpeed: 1000,
      autoplayTimeout: 2000,
      smartSpeed: 1000,
      nav: true,
      dots: false,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      responsive:{
          0:{
              items:1,
              nav: false,
              autoplay: true,
              autoplaySpeed: 3000,
              autoplayTimeout: 5000,
              smartSpeed: 2000,
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  })

  //   start to back-to-top button
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".fixed-btn").addClass("show");
    } else {
      $(".fixed-btn").removeClass("show");
    }
  });
  $(".owl-carousel").on('changed.owl.carousel', function(event) {
    $('video').trigger('pause');
  })
  // when i click fixed-btn
  $(".fixed-btn").click(function () {
    $("html").animate({ scrollTop: 0 }, "slow");
  });

  $( ".dropdown-menu a" ).click(function( event ) {
    event.stopPropagation();
    // Do something
  });

  // update for mega menu

  $(document).ready(function() {

    $(".bottom-header .section-link").click(function(event) {
        $(this).find(".subsections-menu").toggleClass("show")
        event.stopPropagation();
    })
    $(".subsections-menu").click(function(event) {
        event.stopPropagation();
    })

    $(document).click(function() {
        $(".bottom-header .subsections-menu").removeClass("show");
    });
  })
});
