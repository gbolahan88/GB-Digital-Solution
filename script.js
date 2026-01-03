var typed = new Typed(".typing",{
  strings: ["Website Developer","Mobile Developer","Logo Designer","Graphics Designer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop:true
})

var typed = new Typed(".typing2",{
  strings: ["Website Developer","Mobile Developer","Logo Designer","Graphics Designer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop:true
})

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var navToggler = document.querySelector('.nav-toggler');
  var aside = document.querySelector('.aside');
  if (navToggler && aside) {
    navToggler.addEventListener('click', function () {
      aside.classList.toggle('open');
    });
    // close menu when a nav link is clicked
    var navLinks = document.querySelectorAll('.aside .nav a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        aside.classList.remove('open');
      });
    });
  }
});