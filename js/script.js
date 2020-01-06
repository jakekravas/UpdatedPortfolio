$("body").scrollspy({target: "#nav-main"});

$(".ss").on("click" , function(event) {
    // Check for a hash value
    if (this.hash !== "") {
        // Prevent default behavior
        event.preventDefault();

        // Store hash
        const hash = this.hash;

        // Animate smooth scroll
        $("html, body").animate({
        scrollTop: $(hash).offset().top
        }, 800), function() {
        // Add hash to URL after scroll
        window.location.hsh = hash;
        };
    }
});