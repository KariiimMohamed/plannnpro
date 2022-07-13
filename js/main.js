$(document).ready(function()
{

    $(" .navbar .nav-item").click(function(){
        $("this .dropdown-menu").toggleClass("show")
    })

    $(".closenav").click(function(){
        $(".navbar-collapse").addClass("nav-right")
        $(".navbar-collapse").removeClass("show")    
    })
    
    $(".navbar-toggler").click(function(){
        $(".navbar-collapse").removeClass("nav-right")  
    })

})

$(' .project .owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})

$('.sec8 .owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    responsiveClass:true,
    responsive:{

        0:{
            items:1,
            nav:true,
            loop:true
        },

        700:{
            items:2,
            nav:true,
            loop:true
        },
        991:{
            items:3,
            nav:true,
            loop:true
        },
        1200:{
            items:4,
            nav:false,
            loop:false
        }
    }
})