$('svg').click(function(event){
    let r = document.getElementById("rArgument").value
    let pos = $(this).offset();
    let elem_left = pos.left.toFixed(0);
    let elem_top = pos.top.toFixed(0);
    let x = ((event.pageX - elem_left - 200)* r) / 150;
    let y = ((200 - (event.pageY - elem_top))* r) / 150;
    $.ajax({
        url: '/WebLab2_1_0_SNAPSHOT_war/processing',
        type: 'GET',
        data: {'x_value': x, 'y_value': y, 'r_value': r, 'session': session_id(), 'command': 'shoot'},
    }).done(oneShoot)
        .fail(processError)
});




// function mouse_shot(event){
//     let r = document.getElementById("rArgument").value
//     let coordX;
//     let coordY;
//     let x;
//     let y;
//
//     if (r !== null) {
//         coordX = event.pageX;
//         coordY = event.pageY;
//         x = ((coordX - 359) * r) / 150;
//         y = ((345 - coordY) * r) / 150;
//         $.ajax({
//             url: '/WebLab2_1_0_SNAPSHOT_war/processing',
//             type: 'GET',
//             data: {'x_value': x, 'y_value': y, 'r_value': r, 'session': session_id(), 'command': 'shoot'},
//         }).done(oneShoot)
//             .fail(processError)
//     } else $('#error').html("Не введен R.\n")
// }