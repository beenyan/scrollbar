$(function(){
    $(".content:not(:eq(0))").prepend(`<div class="package" style="width: 100%;"><div class="bar theme" check="true"><span>套用樣式</span><div class="bar_check"><div class="bar_background"><div class="bar_round"></div></div></div></div></div>`);
    ["px","em","%","vw","vh","vmin","vmax","in","cm","mm","rem"].forEach(e=>{$(".unit").append(`<option value="${e}">${e}</option>`)});
    $("input[type=number]:not(.deg)").keyup(e => {
        let self = e.currentTarget;
        $(self).val(($(self).val() > 1000)?1000:($(self).val() === "")?0:$(self).val());
    });
    $(".deg").keyup(e => {
        let self = e.currentTarget;
        $(self).val(($(self).val() > 360)?360:($(self).val() === "")?0:$(self).val());
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
        if ($(self).attr("for") !== undefined){
            let fo = $(self).attr("for");
            let bool = $(self).attr("check");
            if (bool === "true"){
                $(`#${fo}`).attr("opened","");
            }
            else $(`#${fo}`).removeAttr("opened");
        }
    });
    $(".content:eq(1) input[type=number],.content:eq(1) .unit").change(e => { //滾動條主體改變生成CSS
        let val = getval(".content:eq(1) input[type=number],.content:eq(1) .unit");
        $(".webkitscrollbar_main").text(`*::-webkit-scrollbar{width:${val[0]+val[1]};height:${val[2]+val[3]}}`);
    });
    $(".theme").click(e => { //套用樣式
        let self = e.currentTarget;
        let css_array = [".webkitscrollbar","webkitscrollbar_button"];
        let index = $(".theme").index(self);
        if ($(self).attr("check") === "true") $(css_array[index]).attr("type","text/css");
        else $(css_array[index]).attr("type","unset");
    });
    $("body").on("change","[type=color]",e => { //顏色改變
        let self = e.currentTarget;
        $(self).siblings(".keyin").val($(self).val());
        $(self).siblings(".keyin").css("color",$(self).val());
    })
    $("body").on("click",".increase",e => { //增加顏色
        let self = e.currentTarget;
        let num = parseInt($(self).parents(".color-show").children(".color-main").last().children().children("span").text());
        $(self).parents(".color-show").children(".margin").before(`<div class="subb package color-main" style="display: block;"><div class="color"><span>${num + 1}.</span><div class="color-picker"><input type="color" value="#E4E6EB"><input type="text" class="keyin" value="#E4E6EB"></div><div class="delete-color">-</div></div></div>`);
    });
    $("body").on("click",".delete-color",e => { //減少顏色
        let self = e.currentTarget;
        let colormain = $(self).parents(".color-show");
        $(self).parents(".color-main").remove(); //刪除自己
        colormain.children(".color-main").each((index,e) => {$(e).children().children("span").text(index+1+".")}); //重整數字
    });
    $("body").on("change",".button-show input",e => {
        let self = e.currentTarget;
        scrollbar_button(self);
    });
    $("body").on("click","#scrollbar_button .fake_checkbox,.button-show .bar,.button-show .fake_checkbox",e => {
        let self = e.currentTarget;
        scrollbar_button(self);
    });
    $("body").on("","",e => {
        let self = e.currentTarget;
    });
    $("body").on("","",e => {
        let self = e.currentTarget;
    });
})