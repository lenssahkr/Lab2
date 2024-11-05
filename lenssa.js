function validateForm() {

    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('question1Error').textContent = '';
    document.getElementById('question2Error').textContent = '';
    document.getElementById('question3Error').textContent = '';

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
    } else {
        document.getElementById('successMessage').style.display = 'none';
    }

    return isValid;
}