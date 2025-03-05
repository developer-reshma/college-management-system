// Validate the form before submission
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return false; // Prevent form submission
    }
  
    // Display a confirmation message after form submission
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = 'Thank you for contacting us! We will get back to you soon.';
    
    // Reset form
    document.getElementById('contact-form').reset();
    return false; // Prevent actual form submission (for demo purposes)
  }