/*
 Simple jQuery plugin to have some 
*/

(function ( $ ) {
 
    $.fn.candy = function( options ) {
 
        // Defaults
        var settings = $.extend({
            candyNumber: 40,
            candyClass: "candy",
            candyRotate: true,
            candyMinTop: 100,
            candyMinBottom: 100,
            candyRunaway: 30
        }, options ),
            self = this,
            lastScrollTop = 0;
 

        $.fn.extend({
            setRotation: function() {
                return this.each(function() {
                    var rndRotation = Math.floor((Math.random() * 180) + 1);
                    $(this).css({
                        '-ms-transform':'rotate(' + rndRotation + 'deg)',
                        '-webkit-transform':'rotate(' + rndRotation + 'deg)',
                        'transform':'rotate(' + rndRotation + 'deg)'
                    });
                });
            },
            setPosition: function() {
                return this.each(function() {
                    var rndTop = Math.floor($('body').height()*Math.random()),
                        rndLeft = Math.floor($('body').width()*Math.random());
                    if(rndTop < settings.candyMinTop) {
                        rndTop += settings.candyMinTop;
                    }
                    if(rndTop > settings.candyMinBottom) {
                        rndTop -= settings.candyMinBottom;
                    }
                    if(rndLeft < 100) {
                        rndLeft += 100;
                    }
                    if(rndLeft > $('body').width() - 100) {
                        rndLeft -= 100;
                    }
                    $(this).css({
                        top: rndTop + 'px',
                        left: rndLeft + 'px',
                    });
                });
            },
            moveAway: function () {
                return this.each(function() {
                    $(this).mousemove( function(event) {
                        _getAway($(this), event);
                    });
                });
            }
        });

        var _getAway = function (elem, event) {
                elem.setRotation();
                var pos = elem.position(),
                    thisHeight = elem.height(),
                    thisWidth = elem.width(),
                    bodyHeight = $("body").height(),
                    bodyWidth = $("body").width();


                /*Én ezt így hagytam, hajrá :)*/
                if (pos.top == event.pageY || parseInt(pos.top) + 12 > event.pageY) {
                    if (parseInt(pos.top) + 30 < parseInt(bodyHeight) - 40) {
                        elem.css({
                            top: parseInt(pos.top) + settings.candyRunaway + 'px'
                        });
                    }
                }
                if (parseInt(pos.top) + 34 == event.pageY || parseInt(pos.top) + thisWidth - 12 < event.pageY) {
                    if (parseInt(pos.top) - 30 > 90) {
                        elem.css({
                            top: parseInt(pos.top) - settings.candyRunaway + 'px'
                        });
                    }
                }
                if (pos.left == event.pageX || parseInt(pos.left) + 12 > event.pageX) {
                    if (parseInt(pos.left) + 30 < parseInt(bodyWidth) - 80) {
                        elem.css({
                            left: parseInt(pos.left) + settings.candyRunaway + 'px'
                        });
                    }
                }
                if (parseInt(pos.left) + 34 == event.pageX || parseInt(pos.left) + thisWidth - 12 < event.pageX) {
                    if (parseInt(pos.left) - 30 > 40) {
                        elem.css({
                            left: parseInt(pos.left) - settings.candyRunaway +'px'
                        });
                    }
                }
        }

        var _move = function (elem, direction) {
            var pos = elem.position(),
                bodyWidth = $("body").width(),
                bodyHeight = $("body").height(),
                newWidth = pos.left;

                /*Ezt is így hagytam, hajrá :)*/

                if (direction < 0) {
                    elem.css({
                        top:   parseInt(pos.top) + settings.candyRunaway + 'px',
                    });
                } else {
                    elem.css({
                        top:   parseInt(pos.top) - settings.candyRunaway + 'px',
                    });
                }
        }

        //populate candies
        var _populate = function () {
            if(settings.candyNumber > 0) {
                for (var i = 0; i < settings.candyNumber; i++) {
                    var rnd = Math.floor((Math.random() * 5) + 1);
                    var candy = $('<span></span>').addClass(settings.candyClass).addClass(settings.candyClass + '-' + rnd)
                        .setRotation()
                        .setPosition()
                        .moveAway()
                        .appendTo(self);

                }
                $(window).scroll(function () {
                    var st = $(this).scrollTop();
                    if(st !== lastScrollTop) {
                        if (st > lastScrollTop){
                            self.find('span').each(function (i, candy) {
                                _move($(candy), 1);
                            })
                        } else {
                            self.find('span').each(function (i, candy) {
                                _move($(candy), -1);
                            })
                        }
                        lastScrollTop = st;
                    }
                });
            }
        };

        return _populate();
 
    };
 
}(jQuery));