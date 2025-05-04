document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const userNameInput = document.getElementById('userName');

    prevButton.addEventListener('click', function () {
        alert('Previous page clicked');
        // Add your navigation logic here
    });

    nextButton.addEventListener('click', function () {
        const userName = userNameInput.value.trim();
        if (userName) {
            alert('Next page clicked - Name: ' + userName);
            // Add your navigation logic here
        } else {
            alert('Please enter your name before proceeding');
        }
    });
});