//迭代算法的排序效率比递归慢一点，但不会受调用栈限制的影响。将递归算法改用迭代实现式避免栈溢出错误的方法之一。
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
    var work = [];
    for (var i = 0, len = items.length; i < len; i++) {
        work.push([items[i]]);
    }
    work.push([]); //如果数组长度为奇数
    for (var lim = len; lim > 1; lim = (lim + 1) / 2) {
        for (var j = 0, k = 0; k < lim; j++, k += 2) {
            work[j] = merge(work[k], work[k + 1]);
        }
        work[j] = [];
    }
    return work[0];
}