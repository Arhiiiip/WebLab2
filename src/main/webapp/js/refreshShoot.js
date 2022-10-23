function refreshShoot(data) {
    for (let i in data) {
        let x = data[i].x
        let y = data[i].y
        let r = data[i].r
        let result = data[i].result
        shoot(x, y, r, result)
        add_row(data[i])
    }
}