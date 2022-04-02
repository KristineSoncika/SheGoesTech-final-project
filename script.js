$(() => {
  // scroll to top button
  $(window).scroll(function () {
    if (
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
});
