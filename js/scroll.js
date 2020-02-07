function nav_fades(){
    if($(window).scrollTop() > 200){
        $('#fades').removeClass('nav-transparent');
        $('#fades').addClass('nav-fade');
    }
    else{
        $('#fades').addClass('nav-transparent');
        $('#fades').removeClass('nav-fade');
    }
}

jQuery(document).ready(function($){
    $(window).scroll(function(){
        nav_fades();
    });

    $(window).on('load', function(){
        nav_fades();
    });
});