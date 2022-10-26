function shoot(x, y, r, result, color) {
    console.log(validate(y))
    let cr = +r;
    let xc = +x * (150 / cr) + 200;
    let yc = -(+y * (150 / cr)) + 200;
    const shoot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    shoot.setAttribute('r', '4');
    shoot.setAttribute('cx', String(xc));
    shoot.setAttribute('cy', String(yc));
    shoot.setAttribute('fill', color);
    shoot.setAttribute('color', color);
    shoot.setAttribute('id', 'dot');
    shoot.setAttribute('class', 'dot');

    let pole = document.getElementById('graph');
    pole.appendChild(shoot);

}
