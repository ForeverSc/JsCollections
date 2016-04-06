function quickSort(array) {
  //快速排序
    if (array.length <= 1) {
        return array;
    }
    var midIndex = Math.floor(array.length / 2);
    var midValue = array.splice(midIndex, 1);
    var left = [];
    var right = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < midValue) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat(midValue, quickSort(right));
}