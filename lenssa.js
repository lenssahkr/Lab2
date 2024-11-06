document.addEventListener('DOMContentLoaded', function () {
    // Get the button and success message element by their IDs
    const submitButton = document.getElementById('submitButton');
    const successMessage = document.getElementById('successMessage');

    // Add an event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default form submission behavior
        
        // Get the first and last name inputs
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const emailInput = document.getElementById('email');


        // Get all form inputs
        const formInputs = document.querySelectorAll('input');
        let isValid = true; // Assume everything is valid

        // Regular expression for only letters (spaces allowed for full name)
        const letterRegex = /^[A-Za-z\s]+$/;  // Adjusted to allow spaces in names

         // Regular expression for valid email format
         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


        // Clear all error messages and border colors before validating
        formInputs.forEach(input => {
            input.style.borderColor = '';
            const errorElement = document.getElementById(input.id + 'Error');
            if (errorElement) {
                errorElement.textContent = '';  // Clear existing error messages
            }
        });

        // Validate first name
        if (!firstNameInput.value || !letterRegex.test(firstNameInput.value)) {
            isValid = false;
            firstNameInput.style.borderColor = 'red'; // Highlight the input in red
            document.getElementById('firstNameError').textContent = "First name is required and should only contain letters.";
        }

        // Validate last name
        if (!lastNameInput.value || !letterRegex.test(lastNameInput.value)) {
            isValid = false;
            lastNameInput.style.borderColor = 'red'; // Highlight the input in red
            document.getElementById('lastNameError').textContent = "Last name is required and should only contain letters.";
        }
        // Validate email
        if (!emailInput.value || !emailRegex.test(emailInput.value)) {
            isValid = false;
            emailInput.style.borderColor = 'red'; // Highlight the input in red
            document.getElementById('emailError').textContent = "Please enter a valid email address (e.g., user@example.com).";
        }
        
        // Loop through all inputs and check if they're filled in
        formInputs.forEach(input => {
            if (input.type !== 'submit' && input.required && !input.value) {
                isValid = false;
                input.style.borderColor = 'red';  // Highlight empty required inputs
                const errorElement = document.getElementById(input.id + 'Error');
                if (errorElement) {
                    errorElement.textContent = "This field is required.";  // General error message for required fields
                }
            }
        });

        // If the form is valid, show the success message
        if (isValid) {
            successMessage.style.display = 'block'; // Show success message
        } else {
            successMessage.style.display = 'none';  // Hide success message if form is not valid
            alert("Please fill out all required fields correctly.");
        }
    });
});


function validateForm() {
    console.log("validateForm function was called");

    // Clear previous error messages
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('question1Error').textContent = '';
    document.getElementById('question2Error').textContent = '';
    document.getElementById('question3Error').textContent = '';

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const question1 = document.querySelector('input[name="question1"]:checked');
    const question2 = document.querySelector('input[name="question2"]:checked');
    const question3 = document.querySelector('input[name="question3"]').value.trim();

    let isValid = true;

    // Validate first name (letters only)
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'First name is required and must contain only letters.';
        isValid = false;
    }

    // Validate last name (letters only)
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Last name is required and must contain only letters.';
        isValid = false;
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate required quiz questions
    if (!question1) {
        document.getElementById('question1Error').textContent = 'Please answer question 1.';
        isValid = false;
    }
    if (!question2) {
        document.getElementById('question2Error').textContent = 'Please answer question 2.';
        isValid = false;
    }
    if (!question3) {
        document.getElementById('question3Error').textContent = 'Please answer question 3.';
        isValid = false;
    }

    // Show success message if form is valid
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        return true;  // Allow form submission
    } else {
        document.getElementById('successMessage').style.display = 'none';
        return false;  // Prevent form submission
    }
}
