function validateForm() {
    // Validate Name (not empty)
    var name = document.getElementById("name").value;
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    // Validate Phone Number
    var phoneNumber = document.getElementById("phoneNumber").value;
    var phoneRegex = /^\+256\d{9}$/; // Format: +256 followed by 9 digits
    if (!phoneRegex.test(phoneNumber)) {
        alert("Please enter a valid phone number in the format +2564567890");
        return false;
    }

    // Validate Email (not empty and valid format)
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        alert("Email must be filled out");
        return false;
    } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate Message (not empty)
    var message = document.getElementById("message").value;
    if (message === "") {
        alert("Message must be filled out");
        return false;
    }

    // If all validations pass, allow form submission
    return true;
}