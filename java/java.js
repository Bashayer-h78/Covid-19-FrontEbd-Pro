let span = document.querySelector(".up");

window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 70) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }

};


span.onclick=function()
{
  window.scrollTo
  (
    {
      top:0,
      behavior:"smooth",
    }
  );
}
// ===============================================
$("nav").find("a").click(function(e) {
  e.preventDefault();
  var section = $(this).attr("href");
  $("html, body").animate({
      scrollTop: $(section).offset().top
  });
});
// =========================================================
const sectionAll = document.querySelectorAll("section[id]");
console.log(sectionAll);

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 300;
    const sectionId = current.getAttribute("id");
    console.log(sectionId);
    console.log(
      document.querySelector('li a[href*="' + sectionId + '"]').classList
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('li a[href*="' + sectionId + '"]')
        .classList.add("on");
    } else {
      document
        .querySelector('li a[href*="' + sectionId + '"]')
        .classList.remove("on");
    }
  });
});
// ====================================


