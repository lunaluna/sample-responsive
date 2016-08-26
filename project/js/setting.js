/*
setting.js
*/

'use strict';

// scroll
(function($){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href = $(this).attr('href');
    var offset = 80;
    var position = $(href).offset().top - offset;
    $('html, body').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
})( jQuery );
