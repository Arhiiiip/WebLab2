function mouse_shot(event){
    let r = document.getElementById("rArgument").value
    let coordX;
    let coordY;
    let x;
    let y;

    if (r !== null) {
        coordX = event.pageX;
        coordY = event.pageY;
        x = (coordX - 286) / 150 * r;
        y = (309 - coordY) / 150 * r;
        $.ajax({
            url: '/WebLab2_1_0_SNAPSHOT_war/processing',
            type: 'GET',
            data: {'x_value': x, 'y_value': y, 'r_value': r, 'session': session_id(), 'command': 'shoot'},
        }).done(oneShoot)
            .fail(processError)
    } else $('#error').html("Не введен R.\n")
}