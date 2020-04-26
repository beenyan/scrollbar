function getval(select){
    let temp = [];
    $(select).each((index,self) => {temp.push($(self).val())});
    return temp;
};