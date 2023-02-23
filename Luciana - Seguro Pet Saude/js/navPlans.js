function openPlan(planName) {
    let i;
    let x = document.getElementsByClassName("plan");
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }

    document.getElementById(planName).style.display = "flex";  
};

let buttons = document.querySelectorAll('.tab-item');

buttons.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
        buttons.forEach(a => a.classList.remove('open'));
        buttons[index].classList !== 'open'
        ? buttons[index].classList.add('open')
        : buttons[index].classList.remove('open');
    });
});

let item = document.querySelectorAll('.item-qa');
let icon = document.querySelectorAll('.icon-q');

item.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
        item.forEach(a => a.classList.remove('open'));
        item[index].classList !== 'open'
        ? item[index].classList.add('open')
        : item[index].classList.remove('open');
    });
});

item.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
        icon.forEach(a => a.innerText = '+');
        icon[index].innerText == '+'
        ? icon[index].innerText = '-'
        : icon[index].innerText = '+';
    });
});
