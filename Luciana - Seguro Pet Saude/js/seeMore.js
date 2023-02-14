var liCount;

$(document).ready(function () {
    $('.text.benefits ul').each(function () {
        liCount = $(this).children('li').length;
        if (liCount > 10) {
            $(this).next('.see-more').addClass('show-me');
        }
    });

    $('.see-more').click(function () {
        ($(this).text() === 'Ver mais') ? $(this).text('Ver menos') : $(this).text('Ver mais');

        $(this).prev('ul').find('li').toggleClass('show-list');
    });
});