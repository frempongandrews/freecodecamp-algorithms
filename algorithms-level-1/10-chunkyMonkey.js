function chunkArrayInGroups(arr, size) {
    var result = [];
    var len = arr.length / size;

    for (var i = 0; i < len; i++) {
        result.push(arr.splice(0, size));
    }

    // console.log(len);
    console.log(result);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
