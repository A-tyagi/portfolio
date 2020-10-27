// Highlights the nav link as active when clicked on
$(document).ready(function(){
    $('a').click(function(){
        $('a').removeClass("active");
        $(this).addClass("active");
    });
  });

// Enables smooth scroll on navgation 
$('a[href*="#"]')
.on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // (800) specifies time it takes to scroll to the specified area
        // - 70 is the offset/top margin
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 75
        }, 1000, function() {

            // Add hash (#) to URL when done scrolling (default click behavior), without jumping to hash
            if (history.pushState) {
                history.pushState(null, null, hash);
            } else {
                window.location.hash = hash;
            }
            //minimize the drop down after clicking a link
            if($(".navbar-toggler-icon").is(":visible")){
                $(".navbar-toggler-icon").trigger("click");
            }
            
        });
        return false;
    } // End if
});

// The function actually applying the offset
function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 100);
    }
  }
  
  // Captures click events of all <a> elements with href starting with #
  $(document).on('click', 'a[href^="#"]', function(event) {
    // Click events are captured before hashchanges. Timeout
    // causes offsetAnchor to be called after the page jump.
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
  });
  
  // Set the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0);
  