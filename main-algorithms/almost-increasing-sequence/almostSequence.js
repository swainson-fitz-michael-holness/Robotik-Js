function almostIncreasingSequence(s) {
    let a = 0;
    for(var x = 0; x < s.length; x++){
        let t = s.splice(x,1);
        for(var m = 0; m <= s.length; m++){
            if(s[m] >= s[m+1]) {
                s.splice(x, 0, t[0]);
                break;
            }
            if(m === s.length) {
                return true
            }
        }
    }    
    return false;
}

s.sort(function(a, b){return a-b});

function almostIncreasingSequenceAlt(s) {
    for(var x = 0; x < s.length; x++){
        let t = s.splice(x,1);
        let alt = [...Array.from(new Set(s))];
        alt.sort(function(a, b){return a-b});
        console.log("A:"+ alt +" = S:"+ s);
        if(alt.toString() === s.toString()) {
            return true;
        } else {
            s.splice(x, 0, t[0]);
        }
    }    
    return false;
}
