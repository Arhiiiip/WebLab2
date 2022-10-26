function reqRefresh(){
    $.ajax({
        url: './processing',
        type: 'GET',
        data: {'x_value': 0, 'y_value': 0, 'r_value': 0, 'command': "refresh"},
        success: function (data) {
            moreShoot(data)
        }
    })
}