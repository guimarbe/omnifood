$(document).ready(function() {

    /**
    *   Función jQuery (utilizando la librería waypoint.js) para que aparezca y desaparezca
    *   el navegador fijo al hacer scroll down al passar el header. El offset es para
    *   que aparezca un poquito antes de llegar a la sección de características.
    */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('animated fadeInDown');
            $('nav').addClass('sticky');
            setTimeout(function() {
                $('nav').removeClass('animated fadeInDown');
            }, 1500);
        } else {
            $('nav').addClass('animated fadeOutUp');
            setTimeout(function() {
                $('nav').removeClass('sticky');
                $('nav').removeClass('animated fadeOutUp');
            }, 200);
        }
    }, {
        offset: '60px;'
    });


    /* ----------------------------------------------------- */
    /* Animación del scroll al pulsar los botones del header */
    /* ----------------------------------------------------- */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });


    /* ----------------------------------------------------- */
    /* ---- Animación del scroll del menú de navegación ---- */
    /* ----------------------------------------------------- */
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

    /* ----------------------------------------------------- */
    /* ---- Animación del scroll del menú de navegación ---- */
    /* ----------------------------------------------------- */
    /* ---- Hemos utilizado waypoints.js y animate.css ----- */

    /* Fundido hacia arriba de las características */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUp');
    }, {
        offset: '50%;'
    });

    /* Fundido de izquierda a derecha del móvil */
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInLeft');
    }, {
        offset: '50%;'
    });

    /* Las imágenes de las ciudades hacen zoom */
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated zoomIn');
    }, {
        offset: '50%;'
    });

    /* El plan premium palpita (debería hacer palpitaciones cada x tiempo) */
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%;'
    });

    /* ----------------------------------------------------- */
    /* ------ Menú adaptativo de dispositivos móviles ------ */
    /* ----------------------------------------------------- */

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        /* Con esta función abrimos y cerramos main-nav */
        nav.slideToggle(200);

        /* Con esta otra función intercambiamos los iconos de menú y de cerrar */
        if (icon.hasClass('ion-md-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close');
        }

    });


});
