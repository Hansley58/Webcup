/*!
=========================================================
* LeadMark Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})

document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Perform an AJAX (asynchronous) request to submit the form data
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Form submitted successfully, display a message to the user
            alert("We appreciate your support in shaping the future of education through innovation and collaboration.Let's work together to make a difference!");

            // Clear form fields
            document.getElementById("contact-form").reset();
        } else {
            // Error handling
            alert("There was an error submitting the form. Please try again later.");
        }
    };
    xhr.onerror = function() {
        // Error handling
        alert("There was a network error. Please try again later.");
    };
    xhr.send(formData);
});

