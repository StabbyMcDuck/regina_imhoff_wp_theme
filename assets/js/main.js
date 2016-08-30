/**
 * Created by reginaimhoff on 8/3/15.
 */
$(function() {
    //cache the window object
    var $window = $(window);

    //Parallax background effect
    $('section[data-type="background"]').each(function() {
        var $backgroundobject = $(this); // assigning the object

        $(window).scroll(function() {
            //scroll the background at var speed
            // y position is negative value because we are scrolling it up

            var yPosition = -($window.scrollTop() / $backgroundobject.data('speed'));

            // put toogether our final background position
            var coordinates = '50% '+ yPosition + 'px';

            //move the background
            $backgroundobject.css({backgroundPosition: coordinates})
        }); // end window scroll

    });

});