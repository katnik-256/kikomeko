document.getElementById('phoneForm').addEventListener('submit', function(event) {
    const phoneInput = document.getElementById('phoneNumber');
    const phoneNumber = phoneInput.value;
    const phonePattern = /^\+?[1-9]\d{1,14}$/; // Simple regex for international phone numbers

    if (!phonePattern.test(phoneNumber)) {
        alert('Please enter a valid phone number.');
        event.preventDefault();
    }
});