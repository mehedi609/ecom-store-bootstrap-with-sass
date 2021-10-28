// const hamburgerBtn = document.getElementById("hamburger-menu");
// const overlay = document.getElementsByClassName("overlay");
//
// hamburgerBtn.addEventListener("click", () => {
//   if (hamburgerBtn.classList.contains("open")) {
//     hamburgerBtn.classList.remove("open");
//     overlay.classList.add();
//   } else {
//     hamburgerBtn.classList.add("open");
//   }
// });

$(document).ready(function () {
  const hamburgerBtn = $("#hamburger-menu");
  const overlay = $(".overlay");

  hamburgerBtn.click(function () {
    // hamburger menu is opened, now close it
    if (hamburgerBtn.hasClass("open")) {
      $("body").removeClass("no-scroll");
      hamburgerBtn.removeClass("open");
      $(".has-fade").each(function () {
        $(this).removeClass("fade-in").addClass("fade-out");
      });
      // hamburger menu is opened, now close it
    } else {
      // hamburger menu is closed, now opened it
      $("body").addClass("no-scroll");
      hamburgerBtn.addClass("open");
      $(".has-fade").each(function () {
        $(this).removeClass("fade-out").addClass("fade-in");
      });
      // overlay.removeClass("fade-out").addClass("fade-in");
    }
  });
});
