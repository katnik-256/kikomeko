document.querySelectorAll(".grade-select").forEach(select => {
    select.addEventListener("change", validateGrades);
});

function validateGrades() {
    const grades = Array.from(document.querySelectorAll(".grade-select"))
        .map(select => parseInt(select.value) || 0);

    const totalScore = grades.reduce((acc, grade) => acc + grade, 0);

    const validationMessage = document.getElementById("validationMessage");

    if (totalScore > 20) {
        validationMessage.textContent = "You don't qualify. The total aggregates exceeds 20.";
    } else {
        validationMessage.textContent = ""; // Clear message if validation passes
    }
}

// validating the form/////////////////////////////////////////////
function validateForm() {
    let isValid = true;
    let errorMessage = "This field is required.";

    // Validate Full Name
    const fullName = document.getElementById('fullName');
    if (!fullName.value.trim()) {
        alert("Full Name is required");
        fullName.focus();
        return false;
    }

    // Validate Class Applied
    const classApplied = document.getElementById('classApplied');
    if (!classApplied.value.trim()) {
        alert("Class Applied is required");
        classApplied.focus();
        return false;
    }

    // Validate Health Details
    const healthDetails = document.getElementById('healthDetails');
    if (!healthDetails.value.trim()) {
        alert("Health details are required.");
        healthDetails.focus();
        return false;
    }

    return isValid;
}
