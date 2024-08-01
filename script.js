// for search bar
$(document).on('click','.search',function(){
    $('.search-bar').addClass('search-bar-active')
})

$(document).on('click','.search-cancel',function(){
    $('.search-bar').removeClass('search-bar-active')
})

/*---- for login and sign up  */
$(document).on('click','.user,.already-account',function(){
    $('.form').addClass('login-active').removeClass('sign-up-active')
})

$(document).on('click','.sign-up-btn',function(){
    $('.form').addClass('sign-up-active').removeClass('login-active')
})

$(document).on('click','.form-cancel',function(){
    $('.form').removeClass('login-active').removeClass('sign-up-active')
})



/*----full-slider-script -----------*/

$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        auto:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});

/* ------featured-slider------*/

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function(){
            $('#autoWidth').removeClass('cs-hidden');
        }
        
    });
});






















// $(document).ready(function(){
//     x = 0;
//     // for next slide

//     $('.next').click(function(){
//         x = (x<=300)?(x+100):0;
//         $('figure').css('left', -x+"%");
//     });
// });

//         //for prev slide 
//         $('.prev').click(function(){
//             x = (x>=100)?(x-100):400;
//             $('figure').css('left', -x+"%");
//         });
























































// /*---- for search bar--- */

// $(document).ready(function(){
//     $('.search').click(function(){
//         $('.search-bar').addClass('search-bar-active')
//     })
// })

// $(document).ready(function(){
//     $('.search-cancel').click(function(){
//         $('.search-bar').removeClass('search-bar-active')
//     })
// })