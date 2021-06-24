window.addEventListener('load', function () {

  var search_field_form = document.getElementById("search_field_form");
  var search_input      = document.getElementById("search_field_input");
  var clear_icon        = document.getElementById("clear_icon");
  var button            = document.getElementsByTagName("button")[1];

  search_field_form.addEventListener('submit', function(e) {
    e.preventDefault();
  });

  window.addEventListener("keyup", check_input);
  window.addEventListener("keydown", check_input);
  clear_icon.addEventListener("click", clear_input);

  function check_input() {
    if (search_input.value == null || search_input.value == "") {
      clear_icon.style.display = "none";
    } else {
      clear_icon.style.display = "block";
    }
  }

  function clear_input() {
    search_input.value       = "";
    clear_icon.style.display = "none";
  }
});
