$(document).ready(function(){
    //Search Box
    $('#cl-search [name=P]').val('Search Site');
    $('#cl-search [name=P]').focus(function () {
        $('#cl-search [name=P]').val('');
    });

    //Accessibility Helper
    $('.noscript').removeClass('noscript');

    //To Top
    $('a#totop').hide();
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('a#totop').fadeIn();   
        } else {
            $('a#totop').fadeOut();
        }
    });
});