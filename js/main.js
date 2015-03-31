(function () {
    //BIZBASZ
    $('#candies').candy();

    //waypoints, faszaság
    var waypointClass = 'main .row [class*="col-"]';
    var animationClasses = ['fadeInUp', 'fadeInDown'];
    var delayTime;
    $(waypointClass).css({opacity: '0'});

    $(waypointClass).waypoint(function() {
        var animationClass = animationClasses[Math.floor(Math.random()*animationClasses.length)];
        delayTime += 100;
        $(this).delay(delayTime).queue(function(next){
            $(this).toggleClass('animated');
            $(this).toggleClass(animationClass);
            delayTime = 0;
            next();
        });
        $(this).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).css({opacity: '1'});
            $(this).toggleClass(animationClass);
        });
    },{
        offset: '90%',
        triggerOnce: true
    });

})();