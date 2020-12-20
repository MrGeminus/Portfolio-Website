document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, { edge: 'right' });
});
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(elems, {
    getActiveElement: function (id) {
      return 'a[href="#' + id + '"]';
    }, activeClass: "active"
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {});
});
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, { fullWidth: true, indicators: true });
});
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, {});
});
let submitBtn = document.getElementById('submit_btn');
submitBtn.addEventListener("click", validateForm);
function validateForm(e) {
  let firstName = document.getElementById('first_name');
  if (firstName.value == '') {
    e.preventDefault();
  }
}