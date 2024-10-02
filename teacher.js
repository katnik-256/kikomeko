function validateForm() {
    // Validate Full Name
    var fullName = document.getElementById("fullName").value.trim();
    if (fullName === "") {
        alert("Please enter your full name.");
        return false;
    }

    // Validate Date of Birth
    var dob = document.getElementById("dob").value;
    if (dob === "") {
        alert("Please enter your date of birth.");
        return false;
    }

    // Validate Phone Number
    var phone = document.getElementById("phone").value.trim();
    if (phone === "" || !validatePhone(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Validate Email
    var email = document.getElementById("email").value.trim();
    if (email === "" || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Address Fields
    var address = document.getElementById("address").value.trim();
    var city = document.getElementById("city").value.trim();
    var state = document.getElementById("state").value.trim();
    var zip = document.getElementById("zip").value.trim();

    if (address === "") {
        alert("Please enter your country.");
        return false;
    }
    if (city === "") {
        alert("Please enter your city.");
        return false;
    }
    if (state === "") {
        alert("Please enter your home district.");
        return false;
    }
    if (zip === "") {
        alert("Please enter your village or residence.");
        return false;
    }

    // Validate Highest Level of Education
    var highestEducation = document.getElementById("highestEducation").value;
    if (highestEducation === "") {
        alert("Please select your highest level of education.");
        return false;
    }

    // Validate Institution Attended
    var institution = document.getElementById("institution").value.trim();
    if (institution === "") {
        alert("Please enter the institution you attended.");
        return false;
    }

    // Validate PDF Upload
    var documents = document.getElementById("documents");
    var filePath = documents.value;
    var allowedExtensions = /(\.pdf)$/i;
    if (!filePath) {
        alert("Please upload your academic documents.");
        return false;
    }
    if (!allowedExtensions.exec(filePath)) {
        alert("Please upload a PDF file.");
        documents.value = '';
        return false;
    }

    return true;
}

// Validate email format
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate phone number format (10 digits)
function validatePhone(phone) {
    var re = /^\d{10}$/;
    return re.test(phone);
}