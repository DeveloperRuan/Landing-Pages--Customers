function openFaq(faqName) {
    let i;
    let el = document.getElementsByClassName("_faq");
    
    for (i = 0; i < el.length; i++) {
        el[i].style.display = "none";  
    };

    document.getElementById(faqName).style.display = "flex";  
};

let faqLinks = document.querySelectorAll('.faq-tab-item');

faqLinks.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
        faqLinks.forEach(a => a.classList.remove('selected'));
        faqLinks[index].classList !== 'selected'
        ? faqLinks[index].classList.add('selected')
        : faqLinks[index].classList.remove('selected');
    });
});