document.addEventListener('DOMContentLoaded', function () {
  
    const submitButton = document.getElementById('submitButton');
    const successMessage = document.getElementById('successMessage');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();  

 
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const emailInput = document.getElementById('email');
        const question1Inputs = document.getElementsByName('question1');
        const question3Input = document.getElementById('question3');

        let isValid = true;  

        const letterRegex = /^[A-Za-z\s]+$/;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const formInputs = document.querySelectorAll('input');
        formInputs.forEach(input => {
            input.style.borderColor = '';  
            const errorElement = document.getElementById(input.id + 'Error');
            if (errorElement) {
                errorElement.textContent = '';  
            }
        });

        if (!firstNameInput.value || !letterRegex.test(firstNameInput.value)) {
            isValid = false;
            firstNameInput.style.borderColor = 'red'; 
            document.getElementById('firstNameError').textContent = "First name is required and should only contain letters.";
        }

   
        if (!lastNameInput.value || !letterRegex.test(lastNameInput.value)) {
            isValid = false;
            lastNameInput.style.borderColor = 'red'; 
            document.getElementById('lastNameError').textContent = "Last name is required and should only contain letters.";
        }


        if (!emailInput.value || !emailRegex.test(emailInput.value)) {
            isValid = false;
            emailInput.style.borderColor = 'red'; 
            document.getElementById('emailError').innerHTML = "<br>Please enter a valid email address (e.g., user@example.com).";
        } else {
            
            document.getElementById('emailError').textContent = '';
        }

        
        let question1Answered = false;
        for (let input of question1Inputs) {
            if (input.checked) {
                question1Answered = true;
                break;
            }
        }
        if (!question1Answered) {
            isValid = false;
            document.getElementById('question1Error').innerHTML = "<br>This question is required.";

        } else {
            document.getElementById('question1Error').textContent = ""; 
        }

       
        if (!question3Input.value) {
            isValid = false;
            question3Input.style.borderColor = 'red';
            document.getElementById('question3Error').innerHTML = "<br>This question is required.";

        } else {
            question3Input.style.borderColor = '';
            document.getElementById('question3Error').textContent = ""; 
        }

     
        if (isValid) {
            successMessage.style.display = 'block'; 
        } else {
            successMessage.style.display = 'none'; 
          
        }
    });
});



function validateForm() {
    console.log("validateForm function was called");

 
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

    
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'First name is required and must contain only letters.';
        isValid = false;
    }

    
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Last name is required and must contain only letters.';
        isValid = false;
    }


    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    
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

   
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        return true;  
    } else {
        document.getElementById('successMessage').style.display = 'none';
        return false;  
    }
}
