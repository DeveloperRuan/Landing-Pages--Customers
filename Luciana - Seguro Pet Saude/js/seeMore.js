var liCount;

$(document).ready(function () {
    const lists = document.querySelectorAll(".list");
    lists.forEach(function (list) {
        const liCount = list.querySelectorAll("li").length;

        if (liCount > 9) {
            list.querySelector(".see-more").classList.add("show-me");
        }
    });

    $('.see-more').click(function () {
        ($(this).text() === 'Ver mais') ? $(this).text('Ver menos') : $(this).text('Ver mais');

        $(this).parent().parent().find('li').toggleClass('show-list');
    });
});