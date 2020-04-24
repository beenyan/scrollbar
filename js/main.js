$(function(){
    $(".guide,#dark_scrim").click(() => { //左側遮布
        if ($("tool-show").attr("opened") === undefined){
            $("tool-show,#dark_scrim").attr("opened","");
            $("body").css("overflow","hidden");
        }
        else {
            $("tool-show,#dark_scrim").removeAttr("opened");
            $("body").css("overflow","auto");
        }
    });
})
try {
    
} catch (error) {
    
}