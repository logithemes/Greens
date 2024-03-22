$(document).ready(function () {
    "use strict";
    //RESPONSIVE MENU BUTTON
    $(".menu-bar i").on("click", function () {
        $(".menu").addClass("menuact");
    });
    //RESPONSIVE MENU BUTTON REMOVE
    $(".menu span").on("click", function(){
        $(".menu").removeClass("menuact");
    })


  
    //SIDE BAR ACT
    $(".sidebat-act").on("click", function(){
        $(".side-bar").addClass("act");
    })

      //SIDE BAR REMOVE
      $(".side-bar-im i").on("click", function(){
        $(".side-bar").removeClass("act");
    })

  
 
//ON WINDOW SCROOL FUNCTION
$(window).on("scroll", function(){

    // window.onscroll = function() {
    //     var _topval1 = $(window).scrollTop()  / 100 % Math.PI; 
    //     document.documentElement.scrollTop / 100 % Math.PI;
    //     document.getElementById("js-logo").style.transform ='rotate(' + _topval1 + 'rad)';
        
    //       card.style.transform = 'rotate3d(1, 2, 3, ' + top + 'deg)';
    //     }
        

  //nav fixed
    var _topval = $(window).scrollTop();
    if(_topval >= 150){
        $(".nav").addClass("act");
    }
    else{
        $(".nav").removeClass("act");
    }


    //on scrool add class
    

        $(".evenclass").each(function () {
            var _seccom = $(this).offset().top + $(this).outerHeight() - 250;
            var _window = $(window).scrollTop() + $(window).height();
            if (_window >= _seccom) {
                $(this).addClass("ani-strt");
                 var trx = '-' + _window / 6 + "px";
            $(".tabel-quotes .ani-strt").css({'transform' : 'translatex(' + trx + ')'})
            $(".pricing .ani-strt").css({'transform' : 'translatex(' + trx + ')'})
            }

            else{
                $(this).removeClass("ani-strt"); 
            }

        })

    //banner img translate
      var _translatex = "-" + _topval / 4 + "px";
      var _translatey =  _topval / 4 + "px";
      $(".shapes3").css({'transform' : 'translate(' + _translatex +', ' + _translatex + ')'});
      $(".shapes4").css({'transform' : 'translate(' + _translatey +', ' + _translatey +')'});

});


});




