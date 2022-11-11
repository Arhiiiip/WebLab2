function requestChange(data, com) {
    $.ajax({
        url: './change',
        type: 'POST',
        cache: false,
        dataType: "json",
        data:{'x_value': data.x, 'y_value': data.y, 'r_value': data.r, 'curTime': data.currentTime, 'exeTime': data.executionTime, 'result': com}
    }).done(myes)
        .fail(errorChange)
}

function errorChange(){
    console.log('FUCK ERROR CHANGE')
}

function myes(fds){
    console.log('Req change')
}