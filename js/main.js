$(function(){
    $(".content:not(:eq(0))").prepend(`<div class="package" style="width: 100%;"><div class="bar" check="true"><span>套用</span><div class="bar_check"><div class="bar_background"><div class="bar_round"></div></div></div></div></div>`);
    ["px","em","%","vw","vh","vmin","vmax","in","cm","mm","rem"].forEach(e=>{$(".unit").append(`<option value="${e}">${e}</option>`)});
    $("input[type=number]").keyup(e => {
        let self = e.currentTarget;
        $(self).val(($(self).val() > 1000)?1000:$(self).val());
    });
    $(".guide,#dark_scrim").click(() => { //左側遮布
        if ($("tool-bar").attr("opened") === undefined){
            $("tool-bar,#dark_scrim").attr("opened","");
            $("body").css("overflow","hidden");
        }
        else {
            $("tool-bar,#dark_scrim").removeAttr("opened");
            $("body").css("overflow","auto");
        }
    });
    $(".fake_checkbox,.bar").click(e => {
        let self = e.currentTarget;
        $(self).attr("check",$(self).attr("check") === "false");
    });
})