window.onload = function () {
    handleClick();
}

function handleDarkMode() {
    const isChecked = document.querySelector('#darkMode');
    const body = document.querySelector('body');

    if (isChecked.checked) {
        return body.classList.toggle('dark-mode');
    }

    return body.classList.toggle('dark-mode');
}


function handleClick() {
    const label = document.querySelector('label');
    return label.addEventListener('click', handleDarkMode);
}