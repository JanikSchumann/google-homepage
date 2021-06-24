window.addEventListener('load', function () {

  var search_field_form = document.getElementById("search_field_form");
  var search_input = document.getElementById("search_field_input");
  var clear_icon = document.getElementById("clear_icon");
  var button = document.getElementsByTagName("button")[1];
  var header = document.getElementById("header");
  var content = document.getElementById("content");
  var footer = document.getElementById("footer");

  search_field_form.addEventListener('submit', function(e) {
    e.preventDefault();
  });

  window.addEventListener("keyup", check_input);
  window.addEventListener("keydown", check_input);
  clear_icon.addEventListener("click", clear_input);
  button.addEventListener("click", result_page);

  function check_input() {
    if (search_input.value == null || search_input.value == "") {
      clear_icon.style.display = "none";
    } else {
      if (event.keyCode === 13) {
        result_page();
        return;
      }
      clear_icon.style.display = "block";
    }
  }

  function clear_input() {
    search_input.value = "";
    clear_icon.style.display = "none";
  }

  function result_page() {
    window.location.href = "http://127.0.0.1:5500/search-results.html";
  }

});
