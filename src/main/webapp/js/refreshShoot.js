function refreshShoot(data) {
    for (let i in data) {
        let x = i.x
        let y = i.y
        let r = i.r
        let result = i.result
        shoot(x, y, r, result)
    }
}