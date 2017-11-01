/* ---------------------------------------------------------------------------------------
*    Loading inicial
* --------------------------------------------------------------------------------------*/
$(window).on('load', function() {
    setTimeout(function(){
        $('.loading, .logo-loading, .icone-loading').fadeOut();
        setTimeout(function(){
            $('body').removeClass('loadingaberto');
        }, 500);
        // altere esse valor para 500 se não quiser delay
    }, 2500);
});
