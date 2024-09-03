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


// FAQ Toggle
document.querySelectorAll('#faq .faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Star Rating
const stars = document.querySelectorAll('#rate-form .star-rating i');
stars.forEach(star => {
    star.addEventListener('click', () => {
        stars.forEach(s => s.classList.remove('active'));
        star.classList.add('active');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.count');

    counters.forEach(counterElement => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        let currentCount = 0;
        const interval = setInterval(() => {
            if (currentCount < randomNumber) {
                currentCount++;
                counterElement.textContent = currentCount + "+";
            } else {
                clearInterval(interval);
            }
        }, 50); // Adjust the speed of the counter increment here
    });
});