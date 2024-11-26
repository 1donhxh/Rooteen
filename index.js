// Attach event listeners to each dropdown button
document.querySelectorAll('.dropdown-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Get the next sibling (dropdown content)
    const content = this.nextElementSibling;

    // Toggle the display of the dropdown content
    if (content.style.display === "block") {
      content.style.display = "none";  // Hide the content
    } else {
      content.style.display = "block";  // Show the content
    }
  });
});
