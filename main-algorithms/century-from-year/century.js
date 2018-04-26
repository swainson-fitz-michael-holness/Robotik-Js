function centuryFromYear(year) {
    if(Math.floor(year/100) < year/100){
        return Math.floor(year/100)+1;
    } else {
        return Math.floor(year/100);
    }   
}
