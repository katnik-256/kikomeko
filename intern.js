document.getElementById("sendButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission to validate first
    
    // Validate Full Name
    var fullName = document.getElementById("fullName").value.trim();
    if (!fullName) {
        alert("Please enter your full name.");
        return false;
    }

    // Validate Date of Birth
    var dob = document.getElementById("dob").value;
    if (!dob) {
        alert("Please enter your date of birth.");
        return false;
    }

    // Validate Phone Number
    var phone = document.getElementById("phone").value.trim();
    if (!phone || !validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    // Validate Email
    var email = document.getElementById("email").value.trim();
    if (!email || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Country, City, District, Village/Residence
    var address = document.getElementById("address").value.trim();
    if (!address) {
        alert("Please enter your country.");
        return false;
    }
    
    var city = document.getElementById("city").value.trim();
    if (!city) {
        alert("Please enter your city.");
        return false;
    }

    var state = document.getElementById("state").value.trim();
    if (!state) {
        alert("Please enter your home district.");
        return false;
    }

    var zip = document.getElementById("zip").value.trim();
    if (!zip) {
        alert("Please enter your village or residence.");
        return false;
    }

    // Validate Level of Education
    var highestEducation = document.getElementById("highestEducation").value;
    if (!highestEducation) {
        alert("Please select your highest level of education.");
        return false;
    }

    var institution = document.getElementById("institution").value.trim();
    if (!institution) {
        alert("Please enter the institution you attended.");
        return false;
    }

    // Validate File Upload (PDF only)
    var fileInput = document.getElementById("documents");
    var filePath = fileInput.value;
    var allowedExtensions = /(\.pdf)$/i;

    if (!filePath) {
        alert("Please upload your academic documents.");
        return false;
    }

    if (!allowedExtensions.exec(filePath)) {
        alert("Please upload a PDF file.");
        fileInput.value = '';
        return false;
    }

    // If all fields are valid
    alert("Form submitted successfully!");
    document.getElementById("studentForm").submit(); // Submit the form after validation
    return true;
});

// Helper function to validate email
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Helper function to validate phone number (10 digits)
function validatePhone(phone) {
    var re = /^\d{10}$/; // Assuming a 10-digit phone number
    return re.test(phone);
}
