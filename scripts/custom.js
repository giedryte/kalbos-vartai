
//Smooth scroll
    $("a").on('click', function(event) {
        var hash = this.hash;

        // Check that hash is non-empty
        // and that element with this hash exsists on this page
        if (hash && $(hash).offset()) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function(){
        
                window.location.hash = hash;
            });
        }
    });



$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    $('.header').css({
        'transform' : 'translate(0px, '+ wScroll /3 + '%)'
    });


    $('.title h1').css({
        'transform' : 'translate(-50%, '+ wScroll / 5 + '%)'
    });

    // $('.button').css({
    //     'transform' : 'translate(-50%, '+ wScroll / 2 + '%)'
    // });

    if (wScroll > $('.service-outer').offset().top - ($(window).height() / 1.2)) {
        $('.service-body .title').addClass("animated fadeInUp");
        $('.service-text p').addClass("animated fadeInUp");
    }

    if (wScroll > $('.service-outer').offset().top - ($(window).height() / 1.2)) {
        $('.arrow-up').addClass('appear');
    } else {
        $('.arrow-up').removeClass('appear');
    }

    if (wScroll > $('.service-items').offset().top - ($(window).height() / 1.5)) {
        $('.item-title').each(function (i) {
            setTimeout(function () {
                $('.item-title').eq(i).addClass('animated fadeInUp'); }, 200 * (i + 1));
        });
    }


    if (wScroll > $('.citation-outer').offset().top - ($(window).height()) && wScroll < $('.about-outer').offset().top ) {

        var citataScroll = wScroll - $('.citation-outer').offset().top;

        $('.citation-body').css({
            'transform' : 'translate(-50%, '+ citataScroll / 4 + '%)'
        });
    }

    if (wScroll > $('.about-outer').offset().top - ($(window).height() / 1.2)) {
        $('.about-body .title').addClass("animated fadeInUp");
        $('.about-text p').addClass("animated fadeInUp");
    }

    if (wScroll > $('.about-outer').offset().top - ($(window).height() / 1.6)) {
        $('.sub-title').addClass("animated fadeInUp");
    }


    if (wScroll > $('.icons-holder').offset().top - ($(window).height() / 1.5)) {
        $('.stiprybe').each(function (i) {
            setTimeout(function () {
                $('.stiprybe').eq(i).addClass('animated fadeInUp'); }, 200 * (i + 1));
        });
    }

    
    if (wScroll > $('.work-outer').offset().top - ($(window).height() / 1.2)) {
        $('.work-body .title').addClass("animated fadeInUp");
    }

    if (wScroll > $('.work-body .item-list').offset().top - ($(window).height() / 1.5)) {
        $('.work-body .item').each(function (i) {
            setTimeout(function () {
                $('.work-body .item').eq(i).addClass('animated fadeInUp'); }, 200 * (i + 1));
        });
    }

    if (wScroll > $('.contacts-outer').offset().top - ($(window).height() / 1.5)) {
        $('.contacts-body .title').addClass("animated fadeInUp");
        $('.kontaktai-forma').addClass("animated fadeInUp");
    }
    
});

$(document).ready( function () {

    $(".arrow-up").on('click', function () {
        $('html, body').animate({
            scrollTop: $('header').offset().top
        }, 1500);
    });
})



