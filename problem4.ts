type objective = {
    arr: Array<number>,
    target: number
}
function findMaxSumSubArray(item: objective): number {
    let maxSum = 0
    let currentSum = 0

    for (let i = 0; i < item.target; i++) {
        currentSum += item.arr[i]
    }

    maxSum = currentSum

    for (let i = item.target; i < item.arr.length; i++) {
        currentSum = currentSum - item.arr[i - item.target] + item.arr[i]
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
}

const item = {
    target: 3,
    arr: [2, 1, 5, 1, 3, 2]
}
const item2 = {
    target: 2,
    arr: [2, 3, 4, 1, 5]
}
const item3 = {
    target: 2,
    arr: [2, 1, 4, 1, 1]
}
const item4 = {
    target: 3,
    arr: [2, 1, 4, 1, 1]
}
const item5 = {
    target: 4,
    arr: [2, 1, 4, 1, 1]
}
console.log(findMaxSumSubArray(item))
console.log(findMaxSumSubArray(item2))
console.log(findMaxSumSubArray(item3))
console.log(findMaxSumSubArray(item4))
console.log(findMaxSumSubArray(item5))
