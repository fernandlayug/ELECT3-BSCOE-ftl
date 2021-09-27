$(document).submit(function(){
    $('#testForm input[type="text"]').blur(function(){
        if(!$(this).val()){
            $(this).addClass("error");
            $(this).css({"border": '#FF0000 2px solid'});
        } else {
            $(this).removeClass("error");
            $(this).css({"border": '#000000 1px solid'});
        }
    });
});