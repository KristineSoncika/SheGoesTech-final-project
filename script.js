$(() => {
  // === scroll to top button
  $(window).scroll(function () {
    if (
      // button appears when number of pixels from the top of body or html (documentElement) when scrolled is > 500
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      $(".to-top").css("display", "block");
    } else {
      $(".to-top").css("display", "none");
    }
  });
  $(".to-top").on("click", () => {
    $(window).scrollTop(0);
  });

  //  === adds active state to current page in navigation bar

  //   1. gets current page URL
  let url = window.location.href;
  //   2. removes # from url if any
  url = url.substring(
    0,
    url.indexOf("#") === -1 ? url.length : url.indexOf("#")
  );
  //   3. removes parameters from URL if any
  url = url.substring(
    0,
    url.indexOf("?") == -1 ? url.length : url.indexOf("?")
  );
  //   4. selects file name
  url = url.substring(url.lastIndexOf("/") + 1);
  //   5. if file name is not available, set it to index.html
  if (url === "") {
    url = "index.html";
  }
  //   6. loop through nav-item links
  $(".nav-item a").each(function () {
    //   select href
    let href = $(this).attr("href");
    // check filename
    if (url === href) {
      // add active class
      $(this).addClass("active-state");
    }
  });
});
