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


/// Function to open the payment form modal
function openPaymentForm() {
    const paymentFormModal = document.getElementById('paymentFormModal');
    paymentFormModal.style.display = 'block';
}

// Function to close the payment form modal
function closePaymentForm() {
    const paymentFormModal = document.getElementById('paymentFormModal');
    paymentFormModal.style.display = 'none';
}

// Function to validate the payment form fields
function validatePaymentForm() {
    const form = document.getElementById('paymentForm');

    // Check if the form is valid
    if (!form.checkValidity()) {
        form.reportValidity(); // Display the validation errors
        return false;
    }

    return true; // Form is valid
}

// Function to handle payment method change events
document.getElementById('paymentMethod').addEventListener('change', function () {
    const selectedMethod = this.value;
    const cardDetails = document.getElementById('cardDetails');

    // Show or hide card details based on selected payment method
    if (selectedMethod === 'mpesa' || selectedMethod === 'tigopesa' || selectedMethod === 'halopesa') {
        cardDetails.style.display = 'none'; // Hide card details for mobile payments
    } else {
        cardDetails.style.display = 'block'; // Show card details for card payments
    }
});

// Function to validate the card number using the Luhn algorithm
function validateCardNumber(number) {
    let sum = 0;
    let shouldDouble = false;

    // Loop through each digit in the card number, starting from the right
    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number.charAt(i), 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9; // Subtract 9 from double digits
        }

        sum += digit;
        shouldDouble = !shouldDouble; // Toggle doubling for the next digit
    }

    return (sum % 10) === 0; // Return true if the sum is divisible by 10
}

// Function to validate and process the payment
function processPayment() {
    const cardNumber = document.getElementById('cardNumber').value;
    const isValidCard = validateCardNumber(cardNumber);

    if (!isValidCard) {
        alert('Invalid card number. Please check and try again.');
        return;
    }

    // Simulate payment processing
    showProcessingIndicator();

    // Simulating a payment processing delay (e.g., calling an API)
    setTimeout(() => {
        // Assuming payment is successful
        hideProcessingIndicator();
        alert('Payment successful! Thank you for your purchase.');

        // Trigger the book download
        downloadBook();

        // Close the payment form
        closePaymentForm();
    }, 3000); // Simulated delay of 3 seconds
}

// Function to show a processing indicator during payment
function showProcessingIndicator() {
    const processingIndicator = document.createElement('div');
    processingIndicator.id = 'processingIndicator';
    processingIndicator.textContent = 'Processing payment, please wait...';
    processingIndicator.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px;
        border-radius: 10px;
        font-size: 18px;
        z-index: 1000;
    `;
    document.body.appendChild(processingIndicator);
}

// Function to hide the processing indicator after payment
function hideProcessingIndicator() {
    const processingIndicator = document.getElementById('processingIndicator');
    if (processingIndicator) {
        processingIndicator.remove();
    }
}

// Function to trigger the book download
function downloadBook() {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'path/to/book.pdf'; // Replace with the actual book file path
    downloadLink.download = 'Book Title.pdf'; // Replace with the actual book title
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// Function to handle the form submission
document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    processPayment(); // Call the processPayment function
});

