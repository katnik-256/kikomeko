function showMobileInput(paymentMethod) {
    // Hide all sections first
    document.getElementById('airtelSection').style.display = 'none';
    document.getElementById('mtnSection').style.display = 'none';
    document.getElementById('bankSection').style.display = 'none';

    // Show the relevant section based on the selected payment method
    if (paymentMethod === 'airtel') {
        document.getElementById('airtelSection').style.display = 'block';
    } else if (paymentMethod === 'mtn') {
        document.getElementById('mtnSection').style.display = 'block';
    } else if (paymentMethod === 'bank') {
        document.getElementById('bankSection').style.display = 'block';
    }
}