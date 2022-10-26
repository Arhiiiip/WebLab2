function moreShoot(data) {
    console.log(data)
    for (let i in data) {
        let x = data[i].x
        let y = data[i].y
        let r = data[i].r
        let result = data[i].result
        let color = data[i].color
        shoot(x, y, r, result, color)
        add_row(data[i])
    }
}