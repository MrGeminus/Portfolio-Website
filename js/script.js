document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, {});
});
let submitBtn = document.getElementById('submit_btn');
submitBtn.addEventListener("click", validateForm);
function validateForm(e) {
  let firstName = document.getElementById('first_name');
  if (firstName.value == '') {
    e.preventDefault();
  }
}