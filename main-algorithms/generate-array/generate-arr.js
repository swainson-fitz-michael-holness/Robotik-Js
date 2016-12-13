function generate(min, max, rule) {
    var genArr = [];
    for(var x = min; x <= max; x++){
        genArr.push(rule(x));
    }
    return genArr;
    // for(var x = min; x <= max; i++) {

    // }
}

console.log(generate(1, 10, function rule(i){return (i*6)-7;}));
