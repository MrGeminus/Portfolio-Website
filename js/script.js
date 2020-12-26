let contactForm = document.getElementById('contact_form');
document.addEventListener("DOMContentLoaded", function () {
  // Defining variables
  let sidenav = document.querySelectorAll(".sidenav");
  let scrollspy = document.querySelectorAll('.scrollspy');
  let materialboxed = document.querySelectorAll('.materialboxed');
  // Initializing the sidenav
  M.Sidenav.init(sidenav, { edge: 'right' });
  // Initializing the scrollspy
  M.ScrollSpy.init(scrollspy, {
    getActiveElement: function (id) {
      return 'a[href="#' + id + '"]';
    }, activeClass: "active"
  });
  // Initializing the materialboxed
  M.Materialbox.init(materialboxed, {});
  contactForm.addEventListener("submit", validateForm);
});
// Validateing the form
function validateForm(e) {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://process.mrgeminus.com/process.php", true);
  xhr.onload = function () { console.log(xhr.responseText) };
  xhr.send(new FormData(contactForm));
}
