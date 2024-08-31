document.addEventListener("DOMContentLoaded", function () {
    const dateElements = [
        document.getElementById("current-date-tense"),
        document.getElementById("current-date-structure"),
        document.getElementById("current-date-reading"),
        document.getElementById("current-date-phonology"),
        document.getElementById("current-date-writing")
    ];

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    dateElements.forEach(el => {
        el.textContent = `Updated ${formattedDate}`;
    });
});



// password:B!WHwBBfwc_$S4!
// https://dashboard.emailjs.com/admin

// Initialize EmailJS
(function () {
    emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID
})();

// Function to send an email
document.getElementById('sendMessageBtn').addEventListener('click', function (e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if the fields are filled
    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
    }

    // Prepare the email parameters
    const emailParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send the email
    emailjs.send("service_4qxx2jv", "template_s97csws", emailParams)
        .then(function (response) {
            alert("Message sent successfully!");
        }, function (error) {
            alert("Please have direct contact with Luminous English Class.");
        });
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Increment slideIndex
    slideIndex++;

    // If the slideIndex is greater than the number of slides, reset it to 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide and add the active class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Change slide every 5 seconds (5000 milliseconds)
    setTimeout(showSlides, 5000);
}




