const button = document.getElementById('modal-btn');
const close = document.getElementById('close');

button.addEventListener('click', () => {
    document.getElementById('modal-box').style.display = "block";
    document.getElementById('image').style.opacity = "1";
});

close.addEventListener('click', () => {
    document.getElementById('modal-box').style.display = "none";
    document.getElementById('image').style.opacity = ".5";
});