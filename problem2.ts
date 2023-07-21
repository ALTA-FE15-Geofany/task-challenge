function cetakTablePerkalian(item: Num): void {
    for (let i = 1; i <= item.num; i++) {
        let row = ''
        for (let j = 1; j <= item.num; j++) {
            const product = i * j
            row += product.toString().padStart(4, ' ')
        }
        console.log(row)
    }
}

type Num = {
    num: number
}
const item = {
    num: 9
}
cetakTablePerkalian(item)
