function shoot(x, y, r, result) {
    if (validate(x, y, r)) {
        let dots = document.getElementById('dot')
        if (dots == null) {
        } else {
            dots.remove()
        }
        let cr = +r;
        let xc = +x * (150 / cr) + 200;
        let yc = -(+y * (150 / cr)) + 200;
        const shoot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        shoot.setAttribute('r', '4');
        shoot.setAttribute('cx', String(xc));
        shoot.setAttribute('cy', String(yc));
        shoot.setAttribute('fill', 'black');
        shoot.setAttribute('color', 'black');
        shoot.setAttribute('id', 'dot');
        if (result === "false" || result === undefined) {
            shoot.setAttribute("style", "color: red")
        } else {
            shoot.setAttribute("style", "color: #0fc40f")
        }
        let pole = document.getElementById('graph');
        pole.appendChild(shoot);
    } else {
        alert('okey')
    }
}