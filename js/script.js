document.addEventListener("DOMContentLoaded", function () {
  // Defining variables
  let sidenav = document.querySelectorAll(".sidenav");
  let scrollspy = document.querySelectorAll('.scrollspy');
  let materialboxed = document.querySelectorAll('.materialboxed');
  let submitBtn = document.getElementById('submit_btn');
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
  submitBtn.addEventListener("click", validateForm);
});
// Validateing the form
function validateForm(e) {
  e.preventDefault();
  let firstName = document.getElementById('first_name');
  let lastName = document.getElementById('last_name');
  let email = document.getElementById('email');
  let subject = document.getElementById('subject');
  let message = document.getElementById('textarea1');
  let inputFields = [firstName, lastName, email, subject, message];
  inputFields.forEach(inputField => {
    let errorMessage = inputField.parentElement.lastElementChild;
    checkIfFieldIsEmpty(inputField, errorMessage);
  });
  checkIfEmailIsValid(inputFields[2]);
}
function checkIfFieldIsEmpty(x, y) {
  if (x.value === '') {
    x.classList.add('invalid');
    y.setAttribute("data-error", "This field is required");
    setTimeout(function () { x.classList.remove('invalid'); y.setAttribute("data-error", "") }, 3500);
  }
}
function checkIfEmailIsValid(x) {
  let reg = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
  let y = x.parentElement.lastElementChild
  if (!reg.test(x.value) && !(x.value === '')) {
    x.classList.add('invalid');
    y.setAttribute("data-error", "Please enter a valid E-mail");
    setTimeout(function () { x.classList.remove('invalid'); y.setAttribute("data-error", "") }, 3500);
  }
}