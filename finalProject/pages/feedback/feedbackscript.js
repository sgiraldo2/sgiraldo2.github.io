function submitForm(event) {
	event.preventDefault();

	// Gets input email from field
	const emailInput = document.getElementById('email');
    // Gets input feedback from field
    const feedbackInput = document.getElementById('feedback');
    //  Gets error message element
	const errorMessage = document.getElementById('error-message');

	// Makes temp variable for email value to validate
	const email = emailInput.value;
    const rating = document.querySelector('input[name="rating"]:checked');
	const ratingValue = rating ? rating.value : '';

	// Get the feedback value
	const feedback = feedbackInput.value;

	// If the email is valid, submit the form
	if (validateEmail(email)) {
		// Send the form data to the server (replace with your own code)
		sendData(email, ratingValue, feedback);

		// Show a success message and reset the form
		alert('Form submitted!');
		emailInput.value = '';
		feedbackInput.value = '';
		errorMessage.textContent = '';
		document.querySelectorAll('input[name="rating"]').forEach(input => input.checked = false);
	}
	// If the email is not valid, display an error message
	else {
		errorMessage.textContent = 'Please enter a valid email address.';
	}
}

function validateEmail(email) {
	// A simple email validation regular expression
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

// function sendData(email, rating, feedback) {
// // data to the server
// 	console.log(`Email: ${email}\nRating: ${rating}\nFeedback: ${feedback}`);
// }