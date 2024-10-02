function validateForm() {
    // Validation for 'Particulars of Student' section
    var fullName = document.getElementById('firstName').value.trim();
    var classApplied = document.getElementById('lastName').value.trim();
    var formerSchool = document.getElementById('formerSchool').value.trim();
    var indexNumber = document.getElementById('indexNumber').value.trim();

    // Validation for 'Results' section
    var mathGrade = document.getElementById('math').value;
    var scienceGrade = document.getElementById('science').value;
    var englishGrade = document.getElementById('english').value;
    var sstGrade = document.getElementById('sst').value;

    // Validation for 'Particulars of Parent' section
    var fatherName = document.getElementById('fatherName').value.trim();
    var motherName = document.getElementById('motherName').value.trim();
    var occupation = document.getElementById('occupation').value.trim();
    var parentEmail = document.getElementById('email').value.trim();
    var parentPhone = document.getElementById('phone').value.trim();
    var homeDistrict = document.getElementById('address').value.trim();
    var villageResidence = document.getElementById('city').value.trim();

    // Validation for 'Details of Person/Organization Paying Fees' section
    var payerName = document.getElementById('payerName').value.trim();
    var payerPhone = document.getElementById('payerPhone').value.trim();

    // Validation for 'Student's Health Details' section
    var healthDetails = document.getElementById('comments').value.trim();

    // Validate 'Particulars of Student'
    if (!fullName) {
        alert("Please enter the full name.");
        return false;
    }
    if (!classApplied) {
        alert("Please enter the class applied for.");
        return false;
    }
    if (!formerSchool) {
        alert("Please enter the former school.");
        return false;
    }
    if (!indexNumber) {
        alert("Please enter the index number.");
        return false;
    }

    // Validate 'Results'
    if (!mathGrade) {
        alert("Please select a grade for Math.");
        return false;
    }
    if (!scienceGrade) {
        alert("Please select a grade for Science.");
        return false;
    }
    if (!englishGrade) {
        alert("Please select a grade for English.");
        return false;
    }
    if (!sstGrade) {
        alert("Please select a grade for SST.");
        return false;
    }

    // Validate 'Particulars of Parent'
    if (!fatherName) {
        alert("Please enter the father's name.");
        return false;
    }
    if (!motherName) {
        alert("Please enter the mother's name.");
        return false;
    }
    if (!occupation) {
        alert("Please enter the parent's occupation.");
        return false;
    }
    if (!parentEmail || !validateEmail(parentEmail)) {
        alert("Please enter a valid parent email address.");
        return false;
    }
    if (!parentPhone || !validatePhoneNumber(parentPhone)) {
        alert("Please enter a valid phone number.");
        return false;
    }
    if (!homeDistrict) {
        alert("Please enter the home district.");
        return false;
    }
    if (!villageResidence) {
        alert("Please enter the village or residence.");
        return false;
    }

    // Validate 'Details of Person/Organization Paying Fees'
    if (!payerName) {
        alert("Please enter the name of the person or organization paying the fees.");
        return false;
    }
    if (!payerPhone || !validatePhoneNumber(payerPhone)) {
        alert("Please enter a valid phone number for the payer.");
        return false;
    }

    // Validate 'Student's Health Details'
    if (!healthDetails) {
        alert("Please provide health details for the student.");
        return false;
    }

    // If all fields are valid
    return true;
}

// Helper function to validate email
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Helper function to validate phone number
function validatePhoneNumber(phone) {
    var re = /^\d{10}$/; // Assuming a 10-digit phone number
    return re.test(phone);
}
