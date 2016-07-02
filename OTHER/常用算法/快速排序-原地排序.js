function quickSort(array, left, right) {
    if (left > right) {
        return;
    }
    var i = left,
        j = right,
        temp = array[left];
    while (i !== j) {
        while (i < j && array[j] >= temp) { //记住一定要从右边开始，直到找到一个小于temp的元素
            j--;
        }

        while (i < j && array[i] <= temp) { //直到找到一个大于temp的元素
            i++;
        }

        if (i < j) {
            var t = array[i];
            array[i] = array[j];
            array[j] = t;
        }

    }

    //i===j时，交换temp和i元素
    var mid = array[i];
    array[i] = temp;
    array[left] = mid;

    //下一次
    quickSort(array, left, i - 1);
    quickSort(array, i + 1, right);


}

var arr = [4, 3, 2, 5, 6, 7, 10, 1, 0];
quickSort(arr, 0, arr.length - 1)
console.log(arr);
