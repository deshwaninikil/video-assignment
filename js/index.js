var counter;
// ----------------------Start function for form validation ------------------------

var formValid = 1,
  dataInput = {},
  hashId = "";

function validateForm(thisId) {
  var txtVal = $.trim(thisId.val());
  var txtName = thisId.attr("name");
  var txtRel = thisId.attr("rel");
  var dataLabel = thisId.attr("data-label");
  var placeHolderVal = thisId.attr("placeholder");
  thisId.closest(".form-group").find(".errormsg").hide();
  if (txtVal && txtVal != "0" && txtVal != placeHolderVal) {
    thisId.css("color", "#000");
    switch (txtRel) {
      case "email":
        var reg4 =
          /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+/gi;
        var regZero = /^[0]+$/gi;
        if (
          txtVal &&
          txtVal != placeHolderVal &&
          (!reg4.test(txtVal) || regZero.test(txtVal))
        ) {
          errMsg = dataLabel + " is not in valid format.";
          thisId.closest(".form-group").find(".errormsg").html(errMsg).show();
          formValid = 0;
        }
        break;
      case "phoneno":
        var reg6 = /^[6789]\d{9}$/;
        var regZero = /^[0]+$/gi;
        if (
          txtVal &&
          txtVal != placeHolderVal &&
          (!reg6.test(txtVal) || regZero.test(txtVal))
        ) {
          errMsg = dataLabel + " is not in valid format.";
          thisId.closest(".form-group").find(".errormsg").html(errMsg).show();
          formValid = 0;
        }
        break;
      default:
        if (txtVal && txtVal != placeHolderVal) {
          thisId.closest(".form-group").find(".errormsg").html(errMsg).hide();
        }
        break;

      case "where":
      case "when":
        break;
    }
  } else {
    if (thisId.attr("data-rel") == "required") {
      if (thisId.is("select")) {
        errMsg = dataLabel;
      } else {
        errMsg = dataLabel + " cannot be blank.";
      }
      thisId.closest(".form-group").find(".errormsg").html(errMsg).show();
      formValid = 0;
    }
  }
  return false;
}
// ----------------------End function for form validation -----------------------
// -------------------------Start Register Form js -----------------------------
$(".registerBtn0").click(function () {
  console.log("click");
  var formNameInput = $(this)
    .closest(".dpLocation")
    .find('input[type="text"],select, textarea');
  errMsg = "";
  formValid = 1;
  $(formNameInput).each(function () {
    validateForm($(this));
  });
});

// -------------------------End Register Form js -----------------------------
/*----------------------------------------- End Pagination Video Section Css------------------------- */

const videos = [
  {
    id: 1,
    title: "The World's Most Expensive Cruise Ship",
    youtubeLink: "https://www.youtube.com/embed/tgbNymZ7vqY",
    publishDate: "2022-04-01",
  },
  {
    id: 2,
    title: "How to Train Your Brain to Learn Faster and Remember More",
    youtubeLink: "https://www.youtube.com/embed/7Mgb7Xt_2Qw",
    publishDate: "2022-04-10",
  },
  {
    id: 3,
    title: "What If We Nuke a City?",
    youtubeLink: "https://www.youtube.com/embed/isFkFWxu21c",
    publishDate: "2022-04-15",
  },
  {
    id: 4,
    title: "The Mystery of the Bermuda Triangle",
    youtubeLink: "https://www.youtube.com/embed/AGBjI0x9VbM",
    publishDate: "2022-04-20",
  },
  {
    id: 5,
    title: "What If Earth Had Rings Like Saturn?",
    youtubeLink: "https://www.youtube.com/embed/Jj5tc8T84Q8",
    publishDate: "2022-05-01",
  },
  {
    id: 6,
    title: "How to Build a Sustainable Future for Our Planet",
    youtubeLink: "https://www.youtube.com/embed/mK9J8ByjT4U",
    publishDate: "2022-05-05",
  },
  {
    id: 7,
    title: "The Physics of Roller Coasters",
    youtubeLink: "https://www.youtube.com/embed/e-AEP3EH69Y",
    publishDate: "2022-05-11",
  },
  {
    id: 8,
    title: "Why Are We Afraid of Spiders?",
    youtubeLink: "https://www.youtube.com/embed/Rd_fIWhGfK4",
    publishDate: "2022-05-16",
  },
  {
    id: 9,
    title: "The Science of Laughter",
    youtubeLink: "https://www.youtube.com/embed/LmzMXtKI5UQ",
    publishDate: "2022-05-20",
  },
  {
    id: 10,
    title: "The Power of Positivity: How to Train Your Brain to Be Happy",
    youtubeLink: "https://www.youtube.com/embed/-L1QON_ol7c",
    publishDate: "2022-05-25",
  },
  {
    id: 11,
    title:
      "The Art of Storytelling: Pixar's 22 Rules for Phenomenal Storytelling",
    youtubeLink: "https://www.youtube.com/embed/g11JjVF618g",
    publishDate: "2022-06-01",
  },
  {
    id: 12,

    title: "The Secrets of the Universe: The Big Bang Theory Explained",
    youtubeLink: "https://www.youtube.com/embed/ivag0CfOcNc",
    publishDate: "2022-06-05",
  },
  {
    id: 13,
    title: "The Evolution of Music: From Prehistoric Sounds to Modern-Day Hits",
    youtubeLink: "https://www.youtube.com/embed/7lDpCPsLcQg",
    publishDate: "2022-06-10",
  },
  {
    id: 14,
    title:
      "How to Make a Fortune on the Stock Market: Tips from a Wall Street Insider",
    youtubeLink: "https://www.youtube.com/embed/bCtlituS9p8",
    publishDate: "2022-06-15",
  },
  {
    id: 15,
    title: "The Science of Dreams: What Do They Mean and Why Do We Have Them?",
    youtubeLink: "https://www.youtube.com/embed/X7R-q9rsrtU",
    publishDate: "2022-06-20",
  },
];

function generateVideoHTML(video) {
  return `
    <div class="video">      
      <iframe  height="315" src="${video.youtubeLink}" frameborder="0" allowfullscreen></iframe>
      <p class="commanpara">${video.title}</p>
    </div>
  `;
}

function renderVideoPage(startIndex, pageSize, videos) {
  let videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = ""; // clear previous videos

  let endIndex = startIndex + pageSize;
  let videosOnPage = videos.slice(startIndex, endIndex);

  for (let video of videosOnPage) {
    videoContainer.insertAdjacentHTML("beforeend", generateVideoHTML(video));
  }
}

function renderPagination(startIndex, pageSize, videos) {
  let paginationContainer = document.getElementById("page-numbers");
  paginationContainer.innerHTML = "";

  let totalPages = Math.ceil(videos.length / pageSize);
  let currentPage = Math.floor(startIndex / pageSize) + 1;

  for (let i = 1; i <= totalPages; i++) {
    let pageButton = document.createElement("button");
    pageButton.innerText = i;
    pageButton.addEventListener("click", () => {
      startIndex = (i - 1) * pageSize;
      renderVideoPage(startIndex, pageSize, videos);
      renderPagination(startIndex, pageSize, videos);
    });
    if (i === currentPage) {
      pageButton.disabled = true;
    }
    paginationContainer.appendChild(pageButton);
  }
  // disable "prev" button on first page
  if (currentPage === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  // disable "next" button on last page
  if (currentPage === totalPages) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

let startIndex = 0;
let pageSize = 3; // display 3 videos per page

let prevButton = document.getElementById("prev-button");
let nextButton = document.getElementById("next-button");

prevButton.addEventListener("click", () => {
  if (startIndex > 0) {
    startIndex -= pageSize;
    renderVideoPage(startIndex, pageSize, videos);
    renderPagination(startIndex, pageSize, videos);
  }
});

nextButton.addEventListener("click", () => {
  if (startIndex + pageSize < videos.length) {
    startIndex += pageSize;
    renderVideoPage(startIndex, pageSize, videos);
    renderPagination(startIndex, pageSize, videos);
  }
});

$("#search").on("input", function () {
  var searchQuery = $(this).val().toLowerCase();
  var filteredVideos = videos.filter(function (video) {
    return video.title.toLowerCase().includes(searchQuery);
  });
  startIndex = 0;
  console.log(filteredVideos);
  renderVideoPage(startIndex, pageSize, filteredVideos);
  renderPagination(startIndex, pageSize, filteredVideos);
});

renderVideoPage(startIndex, pageSize, videos);
renderPagination(startIndex, pageSize, videos);

//--------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------Start Document Ready Function --------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------

$(document).ready(function () {
  // ----------------------Start Registration Form Js inside document ready------------------------

  $(".closereg").click(function () {
    $("#refformmodel").hide().removeClass("in");
    $(".modal-backdrop").remove();
    $("#webinarRegistration").show();
    $("input,select,textarea").val("");
    $("body").removeClass("overflowhide");
  });

  $(document).on("blur", 'input[type="text"],textarea,select', function (e) {
    errMsg = "";
    validateForm($(this));
  });

  // ----------------------End Registration Form Js inside document ready------------------------

  try {
    // ----------------------Start key video Homepage ------------------------
    var numSlick = 0;
    $(".keySlider").each(function () {
      numSlick++;
      $(this)
        .addClass("slider-" + numSlick)
        .slick({
          arrows: true,
          dots: true,
          appendDots: $(this)
            .siblings(".keySliderbutton")
            .find(".keySliderDots"),
          appendArrows: $(this).siblings(".keyLeftRightIcons"),
          autoplay: false,
          infinite: true,
          slidesToShow: 5.3,
          slidesToScroll: 1,
          // centerPadding: '30px',
          responsive: [
            {
              breakpoint: 900,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1.8,
                slidesToScroll: 1,
                centerMode: false,
              },
            },
            {
              breakpoint: 569,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1.8,
                slidesToScroll: 1,
              },
            },
          ],
        });
    });

    // ----------------------End key video Homepage ------------------------------------------

    // -------------------------Start Smooth Scrolling to #id js -----------------------------
    $('.scrollnavTo[href^="#"]').on("click", function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      $(this).parent().siblings().removeClass("active");
      $(this).parent().addClass("active");
      $(".collesped_menu").removeClass("open_menu");
      $(".menubtn").removeClass("open");
      $("body").removeClass("overflowhide");
      var target = this.hash;
      var $target = $(target);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top - 70,
          },
          900,
          "swing",
          function () {}
        );
    });

    // -------------------------End Smooth Scrolling to #id js --------------------------------

    // ----------------------start Video popup js ------------------------
    $(".vidPop, .video-btn").click(function () {
      $(".videoContainer")
        .find("iframe")
        .attr(
          "src",
          "/spotlight/videodash.cms?channel=10001&videosection=videoshow&autoplay=1&audio=1&skipAd=true&kalstream=PROGRESSIVE&msid=" +
            $(this).attr("data-src")
        );
      $(".videoContainer").find("p").text($(this).attr("data-title"));
      $(".background,.videoContainer").show();
      $("body").addClass("overflowhide");
    });
    $(".background .closePop").click(function (e) {
      e.preventDefault();
      $(".background,.popupQuery,.videoContainer").hide();
      $(".videoContainer").find("iframe").attr("src", "");
      $(".videoContainer").find("p").text("");
      $("body").removeClass("overflowhide");
    });

    // ----------------------End Video popup js ------------------------

    // ----------------------Start Social Share js ------------------------

    $(".popupopen").click(function (event) {
      event.preventDefault();
      window.open(
        $(this).attr("href"),
        "mypopup",
        "toolbar=0,status=0,width=548,height=325"
      );
    });
    //Tiny URL for twitter
    $(".TwitterBtn").each(function (c, obj) {
      $.getJSON(
        "https://etsearch.indiatimes.com/etspeeds/tiny.ep?outputtype=json&callback=?&url=" +
          $(obj).attr("data-url"),
        function (data) {
          $(obj).attr(
            "href",
            "https://twitter.com/intent/tweet?text=" +
              escape($(obj).attr("data-text")) +
              "&url=" +
              data.output +
              "&counturl=" +
              $(obj).attr("data-url")
          );
        }
      );
    });

    $(".whatsap").click(function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.open(
        "https://api.whatsapp.com//send?text=" +
          encodeURIComponent(
            $(this).attr("data-text") + " " + $(this).attr("data-url")
          ),
        "mypopup",
        "toolbar=0,status=0,width=548,height=325"
      );
    });
    if ($(window).width() > 769) {
      $(".ytVideo iframe").height($(window).height() - 90);
      $(".ytVideo").height($(window).height() - 80);
    }

    // ----------------------End Social Share js ------------------------
  } catch (e) {
    console.log("Window Error: ", e);
  }

  // ----------------------Start Fixed Nav ------------------------
  if (window.innerWidth < 960) {
    if ($(".fixednav").length) {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 236) {
          $(".fixednav").addClass("navbgwht");
        } else {
          $(".fixednav").removeClass("navbgwht");
        }
      });
    }
  } else {
    if ($(".fixednav").length) {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 66) {
          $(".fixednav").addClass("navbgwht");
        } else {
          $(".fixednav").removeClass("navbgwht");
        }
      });
    }
  }

  // --------------------------End Fixed Nav ----------------------------
  // -------------------------Start On scroll add class to Main Nav -----------------------------
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 95) {
      // If page is scrolled more than 108px
      $(".fixednav").addClass("sticky");
    } else {
      $(".fixednav").removeClass("sticky");
    }
  });
  // -------------------------End On scroll add class to Main Nav -----------------------------
  // ----------------------Start Menu slide from right ------------------------
  $(".menubtn").click(function () {
    $(this).toggleClass("open");
    $(".collesped_menu").toggleClass("open_menu");
    $("body").toggleClass("overflowhide");
  });
  $(".toggle_menu").click(function (e) {
    e.stopImmediatePropagation();
    if ($(this).hasClass("menu_active")) {
      $(this).removeClass("menu_active");
      $(this).find(">ul").slideUp();
    } else {
      $(this).addClass("menu_active");
      $(this).find(">ul").slideDown();
    }
  });
  $(".mainmenu > li").click(function (e) {
    e.stopImmediatePropagation();
    if (
      $(".toggle_menu").hasClass("menu_active") &&
      !$(this).closest(".mainmenu li").hasClass("menu_active_sub")
    ) {
      $(this).closest(".mainmenu li").addClass("menu_active_sub");
      $(this).find(".submenu").slideDown();
    } else if (
      $(".toggle_menu").hasClass("menu_active") &&
      $(this).closest(".mainmenu li").hasClass("menu_active_sub")
    ) {
      $(this).closest(".mainmenu li").removeClass("menu_active_sub");
      $(this).find(".submenu").slideUp();
    }
  });
  $(".collesped_menu").mouseup(function (e) {
    var container = $(".mobbg");

    if (
      !$(".menubtn").is(e.target) &&
      !container.is(e.target) &&
      container.has(e.target).length === 0
    ) {
      console.log(1);
      $(".menubtn").removeClass("open");
      $(".collesped_menu").removeClass("open_menu");
      $("body").removeClass("overflowhide");
    }
  });

  // ----------------------End Menu slide from right ------------------------

  // ----------------------End Menu slide from right ------------------------

  $(".open-button").click(function () {
    $(".registerFormPopUp")
      .addClass("in")
      .append('<div class="modal-backdrop fade in"></div>')
      .show();
    $("body").addClass("overflowhide");
  });

  $(".closeregpop").click(function () {
    $(".registerFormPopUp").hide().removeClass("in");
    $(".modal-backdrop").remove();
    $(".resiterationElements .form-group input").val("");
    $(".errormsg").html("").hide();
    $("body").removeClass("overflowhide");
    $(".expressIntrstMain").show();
    // location.reload();
  });

  //-------------------------------------------------------------------------------------------------------------------------------------------------------
});
// ------------------------------------------------------------------------End Document Ready Func -------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------
