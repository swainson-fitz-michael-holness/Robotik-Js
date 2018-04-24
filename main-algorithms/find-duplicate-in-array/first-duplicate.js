function firstDuplicate(a) {
    let cacheArr = [];
    for (var i = 0; i <= a.length; i++) {
        if (cacheArr.includes(a[i])){
            return a[i]
        } else {
            cacheArr.push(a[i]);
        }; 
        if (i === a.length) {
           return -1; 
        }
    }
}

//Swainson Holness
