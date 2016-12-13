function repeatStringNumTimes(str, num) {
    var tmp = str;
    if(num < 0){
        return str = '';
    }
    for(var i = 0; i <= num - 2; i++){       
        str = str.concat(tmp);
    }
    console.log(str);
    return str;
}

repeatStringNumTimes("k", 3);