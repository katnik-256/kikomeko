
  function validateForm() {
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic form validation (you can customize this)
    if (!name || !phoneNumber || !email || !message) {
      alert("All fields are required!");
      return false;  // Prevent the form from submitting
    }

    // Sending form data via AJAX to the server
    const formData = {
      name,
      phoneNumber,
      email,
      message
    };

    fetch('https://kikomeko.onrender.com/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending the message.');
      });

    return false;  // Prevent default form submission
  }

