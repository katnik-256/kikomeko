function showMobileInput(paymentMethod) {
    const mobileNumberInput = document.getElementById('mobileNumberInput');
    const mobileLabel = document.getElementById('mobileLabel');
    const mobileNumber = document.getElementById('mobileNumber');

    if (paymentMethod === 'airtel') {
        mobileLabel.textContent = 'Enter Airtel Money Number:';
        mobileNumberInput.style.display = 'block';
        mobileNumber.placeholder = 'Enter your Airtel Money number';
        mobileNumber.required = true; // Make the number required
    } else if (paymentMethod === 'mtn') {
        mobileLabel.textContent = 'Enter MTN Mobile Money Number:';
        mobileNumberInput.style.display = 'block';
        mobileNumber.placeholder = 'Enter your MTN Mobile Money number';
        mobileNumber.required = true; // Make the number required
    } else {
        mobileNumberInput.style.display = 'none';
        mobileNumber.required = false; // Make the field optional for bank payments
    }
}
 