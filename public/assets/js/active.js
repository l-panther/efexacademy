$(document).ready(function () {

  // Get the 'page' query parameter from the URL (if available)
  const page = new URLSearchParams(window.location.search).get('page');

  // Map URL keywords to link classes
  const menuMap = [
      ["index", ".index-link"],
      ["roller-banner", ".roller-link"],
      ["banner-stands", ".banner-link"],
      ["popup-stands", ".popup-link"],
      ["literature-stands", ".literature-link"],
      ["modular-exhibition-stands", ".exhibition-link"],
      ["lite-modular-stands", ".lite-link"],
      ["stand-design", ".design-link"],
      ["large-format-print", ".format-link"],
      ["event-management", ".event-link"],
      ["contact", ".contact-link"]
  ];

  // Remove 'active' from all menu items
  $(".nav-item").removeClass("active");

  // Check if there's a 'page' parameter and set the active menu item
  if (page) {
    menuMap.forEach(([keyword, selector]) => {
      if (page.includes(keyword)) {
        $(selector).addClass("active");
      }
    });
  } else {
    // If no 'page' parameter exists, assume it's the index page
    $(".index-link").addClass("active");
  }

  // Run slideshow & registration ONLY if "page" is NOT in URL
  if (!page) {
    w3.slideshow('.testimonial', 6000);
    document.getElementById('registration').style.display = 'block';
  }
});
