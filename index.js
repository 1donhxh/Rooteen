function toggleDropdown(day) {
  var content = document.getElementById(day);
  var button = content.previousElementSibling;

  // Toggle the 'active' class on the button to trigger the dropdown visibility
  button.classList.toggle('active');
  content.style.display = content.style.display === "block" ? "none" : "block";
}
