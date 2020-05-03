function getval(select){
    let temp = [];
    $(select).each((index,self) => {temp.push($(self).val())});
    return temp;
};
function filter_ck(select){
    let temp = [];
    $(select).each((index,e) => {if ($(e).attr("check")==="false") temp.push(`#${$(e).attr("for")} *`)});
    return temp;
}
function scrollbar_button(self){
    $("#scrollbar_button .fake_checkbox").each((index,e) => {
        let alltext = "";
        if ($(e).attr("check") === "true"){
            // let filter = (($(`#${id} .bar:eq(0)`).attr("check")==="false")?".active *":"null")+(($(`#${id} .bar:eq(1)`).attr("check")==="false")?",.hover *":"null");
            let name = ["main-img","main-color","main-border","active-img","active-color","active-border","hover-img","hover-color","hover-border"];
            let id = $(e).attr("for");
            main_val = {
                "main" : getval(`#${id} *:not(.active *,.hover *):not(.img-show *,.color-show *,.border-show *)>input,#${id} *:not(.active *,.hover *):not(.img-show *,.color-show *,.border-show *)>select`),
                "main-img" : getval(`#${id} .img-show:eq(0) input,#${id} .img-show:eq(0) select`),
                "main-color" : getval(`#${id} .color-show:eq(0) input:not([type=color])`),
                "main-border" : getval(`#${id} .border-show:eq(0) input:not([type=color]),#${id} .border-show:eq(0) select`),
                "active-img" : getval(`#${id} .img-show:eq(1) input,#${id} .img-show:eq(1) select`),
                "active-color" : getval(`#${id} .color-show:eq(1) input:not([type=color])`),
                "active-border" : getval(`#${id} .border-show:eq(1) input:not([type=color]),#${id} .border-show:eq(1) select`),
                "hover-img" : getval(`#${id} .img-show:eq(2) input,#${id} .img-show:eq(2) select`),
                "hover-color" : getval(`#${id} .color-show:eq(2) input:not([type=color])`),
                "hover-border" : getval(`#${id} .border-show:eq(2) input:not([type=color]),#${id} .border-show:eq(2) select`),
            }
            $(`#${id} .fake_checkbox`).each((index,e) => {
                if ($(e).attr("check") === "false") main_val[name[index]] = main_val[name[index]].map(e => {return "unset"});
            });
            console.log(main_val);
        }
    });
}