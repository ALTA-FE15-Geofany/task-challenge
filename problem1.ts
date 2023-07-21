type objective = {
    arr: Array<number>,
    target: number
}
function findPairWithTargetSum(item: objective): number[] {
    let left = 0
    let right = item.arr.length - 1

    while (left < right) {
        const sum = item.arr[left] + item.arr[right]

        if (sum === item.target) {
            return [left, right]
        } else if (sum < item.target) {
            left++
        } else {
            right--
        }
    }
    return []
}

const item = {
    arr: [1, 2, 3, 4, 6],
    target: 6
}
const item2 = {
    arr: [2, 5, 9, 11],
    target: 11
}
const item3 = {
    arr: [1, 3, 5, 7],
    target: 12
}
const item4 = {
    arr: [1, 4, 6, 8],
    target: 10
}
const item5 = {
    arr: [1, 5, 6, 7],
    target: 6
}
console.log(findPairWithTargetSum(item))
console.log(findPairWithTargetSum(item2))
console.log(findPairWithTargetSum(item3))
console.log(findPairWithTargetSum(item4))
console.log(findPairWithTargetSum(item5))
