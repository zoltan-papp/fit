'use strict';

(function () {

    var HEADER = {

        gif: '/img/logo.gif',
        jpg: '/img/logo.jpg',

        getLogo: function () {
            return $('.navbar-logo-animated').find('img');
        },

        getNavbar: function () {
            return $('.navbar');
        },

        getMenuItems: function () {
            return $('.navbar').find('.nav li a');
        },

        getBody: function () {
            return $('html, body');
        },

        changeLogoState: function (delay, isAnim) {
            var newSrc = isAnim ? this.gif : this.jpg,
                elem = this.getLogo();

            setTimeout(function (){
                elem.attr('src', newSrc);
            }, delay * 1000);

            //we want to make this whole stuff chainable
            return this;
        },

        scrollToTop: function () {
            var self = this;
            self.getBody().animate({scrollTop:0}, '1000', 'swing', function() { 
                self.changeLogoState(0,true);
            });
        },

        animateScroll: function (event) {
            //disable anchor
            event.preventDefault();
            var self = this,
                hash = event.target.hash;
            self.getBody().animate({
                scrollTop: $(hash).offset().top
            }, 300, function(){
                window.location.hash = hash;
            });
        }

    };


    HEADER.changeLogoState(0, true).changeLogoState(4, false);

    HEADER.getLogo().click(function () {
        HEADER.scrollToTop()
    });

    HEADER.getMenuItems().click(function (event) {
        HEADER.animateScroll(event);
    });

    HEADER.getNavbar().affix({
        offset: {
            top: 150
        }
    });


})();