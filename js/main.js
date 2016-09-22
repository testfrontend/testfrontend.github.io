$(function () {
    $('.b-comment__btn').on('click', function (e) {
        e.preventDefault();
        var d = new Date();

        var month = d.getMonth() + 1,
            day = d.getDate(),
            output = d.getFullYear() + ' ' + (month < 10 ? '0' : '') + month + ' ' + (day < 10 ? '0' : '') + day;


        var getText = $('.b-comment__form-text'),
            ms = getText.val();
        getText.val('');

        $('.b-message').append('<div class="l-container"> <div class="b-message__item"> <div class="b-message__item-title"> <span class="b-name">Лилия Семёновна </span><span class="b-date"> ' + output + '</span> </div> <p class="b-message__item-text">' + ms + '</p> </div> </div>');
    });

});