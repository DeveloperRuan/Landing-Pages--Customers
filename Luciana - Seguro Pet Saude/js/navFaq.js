function openFaq(faqName) {
    let i;
    let el = document.getElementsByClassName("_faq");
    
    for (i = 0; i < el.length; i++) {
        el[i].style.display = "none";  
    };

    document.getElementById(faqName).style.display = "flex";  
};

let faqLinks = document.querySelectorAll('.faq-nav-link');
let faqLinksDecor = document.querySelectorAll('.faq-decor');

faqLinks.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
        faqLinks.forEach(a => a.classList.remove('selected'));
        faqLinks[index].classList !== 'selected'
        ? faqLinks[index].classList.add('selected')
        : faqLinks[index].classList.remove('selected');
    });
});

faqLinksDecor.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
        faqLinksDecor.forEach(a => a.classList.remove('txt-bd'));
        faqLinksDecor[index].classList !== 'txt-bd'
        ? faqLinksDecor[index].classList.add('txt-bd')
        : faqLinksDecor[index].classList.remove('txt-bd');
    });
});