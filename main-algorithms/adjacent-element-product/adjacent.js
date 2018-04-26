function adjacentElementsProduct(arr) {
    let obj={a:arr[0]*arr[1]};
    for(var i = 0; i < arr.length; i++) {
        if(arr[i]*arr[i+1] > obj.a) {
            obj.a = arr[i]*arr[i+1]
        }
    }
    return obj.a
}
