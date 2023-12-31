document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('button[type="button"]');
    var message = document.getElementById('hiddenMessage');
    var nameForm = document.getElementById('nameForm');
    var userNameSpan = document.getElementById('userName');

    button.addEventListener('click', function () {
        var nameInput = document.getElementById('name');
        var userName = nameInput.value.trim();
        userNameSpan.textContent = userName ? userName + "'s" : "your";
        message.style.display = 'block';
    });
});
