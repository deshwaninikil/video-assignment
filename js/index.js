const videos = [
  {
    title: "The World's Most Expensive Cruise Ship",
    youtubeLink: "https://www.youtube.com/embed/tgbNymZ7vqY",
    publishDate: "2022-04-01",
  },
  {
    title: "How to Train Your Brain to Learn Faster and Remember More",
    youtubeLink: "https://www.youtube.com/embed/7Mgb7Xt_2Qw",
    publishDate: "2022-04-10",
  },
  {
    title: "What If We Nuke a City?",
    youtubeLink: "https://www.youtube.com/embed/isFkFWxu21c",
    publishDate: "2022-04-15",
  },
  {
    title: "The Mystery of the Bermuda Triangle",
    youtubeLink: "https://www.youtube.com/embed/AGBjI0x9VbM",
    publishDate: "2022-04-20",
  },
  {
    title: "What If Earth Had Rings Like Saturn?",
    youtubeLink: "https://www.youtube.com/embed/Jj5tc8T84Q8",
    publishDate: "2022-05-01",
  },
  {
    title: "How to Build a Sustainable Future for Our Planet",
    youtubeLink: "https://www.youtube.com/embed/mK9J8ByjT4U",
    publishDate: "2022-05-05",
  },
  {
    title: "The Physics of Roller Coasters",
    youtubeLink: "https://www.youtube.com/embed/e-AEP3EH69Y",
    publishDate: "2022-05-11",
  },
  {
    title: "Why Are We Afraid of Spiders?",
    youtubeLink: "https://www.youtube.com/embed/Rd_fIWhGfK4",
    publishDate: "2022-05-16",
  },
  {
    title: "The Science of Laughter",
    youtubeLink: "https://www.youtube.com/embed/LmzMXtKI5UQ",
    publishDate: "2022-05-20",
  },
  {
    title: "The Power of Positivity: How to Train Your Brain to Be Happy",
    youtubeLink: "https://www.youtube.com/embed/-L1QON_ol7c",
    publishDate: "2022-05-25",
  },
  {
    title:
      "The Art of Storytelling: Pixar's 22 Rules for Phenomenal Storytelling",
    youtubeLink: "https://www.youtube.com/embed/g11JjVF618g",
    publishDate: "2022-06-01",
  },
  {
    title: "The Secrets of the Universe: The Big Bang Theory Explained",
    youtubeLink: "https://www.youtube.com/embed/ivag0CfOcNc",
    publishDate: "2022-06-05",
  },
  {
    title: "The Evolution of Music: From Prehistoric Sounds to Modern-Day Hits",
    youtubeLink: "https://www.youtube.com/embed/7lDpCPsLcQg",
    publishDate: "2022-06-10",
  },
  {
    title:
      "How to Make a Fortune on the Stock Market: Tips from a Wall Street Insider",
    youtubeLink: "https://www.youtube.com/embed/bCtlituS9p8",
    publishDate: "2022-06-15",
  },
  {
    title: "The Science of Dreams: What Do They Mean and Why Do We Have Them?",
    youtubeLink: "https://www.youtube.com/embed/X7R-q9rsrtU",
    publishDate: "2022-06-20",
  },
];

var currentVideo = null;
var iframes = document.getElementsByTagName("iframe");

for (var i = 0; i < iframes.length; i++) {
  iframes[i].addEventListener("click", function () {
    // Pause any currently playing video
    if (currentVideo != null && currentVideo != this) {
      currentVideo.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }

    currentVideo = this;
  });
}

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
  paginationContainer.innerHTML = ""; // clear previous pagination

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

// -----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------Start Document Ready-----------------------------------
// -----------------------------------------------------------------------------------------------------------
$(document).ready(function () {
  // -----------------------------------------------------------------------------------------------------------

  $(".closereg").click(function () {
    $("#refformmodel").hide().removeClass("in");
    $(".modal-backdrop").remove();
    $("#webinarRegistration").show();
    $("input,select,textarea").val("");
    $("body").removeClass("overflowhide");
  });
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

  //---------------------------------------------------------------------------------------------------------

  // ----------------------------------------------------End Document Ready-----------------------------------
});
//---------------------------------------------------------------------------------------------------------
