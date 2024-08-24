document.getElementById('seeMoreButton').addEventListener('click', function() {
    // Load more content or navigate to another page
    window.location.href = 'gallery.html'; // Example of redirecting to another page
    // Alternatively, you could use JavaScript to load more content dynamically
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('rotateButton');

    button.addEventListener('mouseenter', function() {
        button.style.transform = 'rotate(30deg)';
        button.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseleave', function() {
        button.style.transform = 'rotate(0deg)';
        button.style.transition = 'transform 0.3s ease';
    });
});
