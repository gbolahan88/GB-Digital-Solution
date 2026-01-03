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

// active btn
const navLinks = document.querySelectorAll('.aside .nav li a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    // Add active class to the clicked link
    this.classList.add('active');
  });
});

//scroll avtive
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY || window.pageYOffset;

  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.aside .nav li a[href="#${id}"]`);
      if(activeLink) activeLink.classList.add('active');
    }
  });
});


