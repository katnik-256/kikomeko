function validateForm() {
    // Get form values
    var name = document.getElementById("name").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Name validation
    if (name == "") {
        alert("Please enter your name.");
        return false; // Prevent form submission
    }

    // Phone number validation (must follow +256123456789 format)
    var phonePattern = /^\+256\d{9}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid phone number in the format +256123456789.");
        return false;
    }

    // Email validation (simple format)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Message validation
    if (message == "") {
        alert("Please enter a message.");
        return false;
    }

    // If all validations pass, allow form submission
    alert("Form submitted successfully!");
    return true;
}

//validating form for student form
function validateForm() {
    // Get form elements by ID
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var formerSchool = document.getElementsByName("lastName")[0].value; // You have multiple lastName inputs, so use name and index
    var indexNumber = document.getElementsByName("lastName")[1].value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;

    // Name validation
    if (firstName == "" || lastName == "") {
        alert("Please fill out all name fields.");
        return false;
    }

    // Phone validation (basic pattern: 10 digits)
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Email validation (simple pattern)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check for any empty required fields in school info
    if (formerSchool == "" || indexNumber == "") {
        alert("Please fill out all school details.");
        return false;
    }

    // Check if health details are entered
    if (comments == "") {
        alert("Please provide health details.");
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}

//validating form form teacher application
function validateForm() {
    // Get form elements by ID
    var fullName = document.getElementById("fullName").value;
    var dob = document.getElementById("dob").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var district = document.getElementById("state").value;
    var village = document.getElementById("zip").value;
    var education = document.getElementById("highestEducation").value;
    var institution = document.getElementById("institution").value;
    var documents = document.getElementById("documents").value;

    // Validate full name
    if (fullName.trim() == "") {
        alert("Full Name is required.");
        return false;
    }

    // Validate date of birth
    if (dob == "") {
        alert("Date of Birth is required.");
        return false;
    }

    // Validate phone (basic pattern: 10 digits)
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Validate email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate address fields
    if (country.trim() == "" || city.trim() == "" || district.trim() == "" || village.trim() == "") {
        alert("Please fill out all address fields.");
        return false;
    }

    // Validate education level
    if (education == "") {
        alert("Please select the highest level of education.");
        return false;
    }

    // Validate institution attended
    if (institution.trim() == "") {
        alert("Please enter the institution attended.");
        return false;
    }

    // Validate document upload (PDF only)
    var fileExtension = documents.split('.').pop().toLowerCase();
    if (fileExtension != "pdf") {
        alert("Only PDF files are allowed for academic documents.");
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}