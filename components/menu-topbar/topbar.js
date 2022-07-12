// Al dar clic muestra el menú
$('.open').click(function(){
    $(this).css('display', 'none');
    $('.close').css('display', 'block');
    $('.topbar').css('transform', 'translateY(125px) translateX(0)');
})

// Al dar clic cierra oculta el menú
$('.close').click(function(){
    $(this).css('display', 'none');
    $('.open').css('display', 'block');
    $('.topbar').css('transform', 'translateY(125px) translateX(-100%)');
})
