$('svg').click(function(event){
    let r = document.getElementById("rArgument").value
    let pos = $(this).offset();
    let elem_left = pos.left.toFixed(0);
    let elem_top = pos.top.toFixed(0);
    let x = (((event.pageX - elem_left - 200)* r) / 150).toFixed(2);
    let y = (((200 - (event.pageY - elem_top))* r) / 150).toFixed(2);
    $.ajax({
        url: './processing',
        type: 'GET',
        data: {'x_value': x, 'y_value': y, 'r_value': r, 'command': 'shoot'},
    }).done(oneShoot)
        .fail(processError)
});
