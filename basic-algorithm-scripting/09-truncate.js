function truncateString(str, num) {
    var tmp; 
    if(num <= 3){
        tmp = str.slice(0, num);
        tmp += "...";
        console.log(tmp);
        return tmp;
    } else if(num >= str.length){
        tmp = str.slice(0, num);
        console.log(tmp);
        return tmp;
    } 
    
    else {
        tmp = str.slice(0, num - 3);
        tmp += "...";
        console.log(tmp);
        return tmp;
    }    
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);