//JavaScript归并排序实现，递归算法
function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left,right);
}

function mergeSort(items) {
    if (items.length == 1) {
        return items;
    }
    var middle = Math.floor(items.length / 2),
        left = items.slice(0, middle),
        right = items.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}