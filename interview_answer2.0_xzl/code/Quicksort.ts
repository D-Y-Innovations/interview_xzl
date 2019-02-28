//2. 编写 quicksort

function quickSort <T>(arr:Array<T>):Array<T> {
    // 检查数组长度，小于等于一直接返回
    if (arr.length <= 1) {
        return arr;
    }
    // 数组分割，取中间下标为基准
    const pivotIndex = Math.floor(arr.length / 2);
    // 选择"基准"（pivot）i
    const pivot = arr.splice(pivotIndex, 1)[0];
    // 定义左右子数组
    const left = [];
    const right = [];
    //遍历数组，小于基准的元素放入左数组，大于基准的元素放入右数组
    for (let i:number= 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    // 递归不断重复这个过程，得到排序后的数组
    return quickSort(left).concat([pivot], quickSort(right));
}
const arr : Array<number> = [1, 5, 7, 9, 6, 44, 100, 77, 150];
console.log(quickSort(arr));
