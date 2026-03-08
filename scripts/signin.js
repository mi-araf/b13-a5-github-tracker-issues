document.getElementById('sign-in-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input');
    const userInputValue = userInput.value;
    const userPass = document.getElementById('user-pass');
    const userPassValue = userPass.value;

    if (userInputValue == 'admin' && userPassValue == 'admin123') {
        window.location.assign('./main.html');
    } else {
        alert('Invalid Credentials');
        return;
    }

})