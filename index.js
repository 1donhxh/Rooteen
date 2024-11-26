function toggleDropdown(day) {
  var content = document.getElementById(day); // Get the dropdown content for the specified day
  var button = content.previousElementSibling; // Get the associated button

  // Toggle the 'active' class on the button for styling purposes
  button.classList.toggle('active');

  // Toggle the visibility of the dropdown content
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
