const cutTrees = arr => {
    let oArr = arr;
    let spliceA = concat(oArr);
    let treesCut = [];

    for (let i = 0; i < oArr.length; i++) {
        spliceA = [].concat(oArr);
        spliceA.splice(i, 1);
        if (isOrder(spliceA)) {
            treesCut.push(oArr);
        }
    }
    return treesCut.length;
}


const isOrder = arr => {
    let num = arr[0];
    let ans = true;
    for (let k = 0; k <= arr.length; k++) {
        if (arr[k] >= num) {
            num = arr[k];
        } else {
            ans = false;
        }
    }
    return ans;
}

