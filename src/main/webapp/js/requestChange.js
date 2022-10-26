function requestChange(data, com) {
    $.ajax({
        url: '/WebLab2_1_0_SNAPSHOT_war/change',
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

// let ws = new WebSocket("ws://localhost:8090/mail");
//
// ws.onmessage = function(event) {
//     console.log(event.data)
//     console.log(JSON.parse(event.data))
// };
//
// function sendMessage(data){
//     let ws = new WebSocket("ws://localhost:8090/mail");
//     ws.send(data)
// }



// function requestChange(){
//     let countDots = document.getElementsByClassName('dot').length
//     console.log('ChangeReq')
//     $.ajax({
//         url: '/WebLab2_1_0_SNAPSHOT_war/processing',
//         type: 'GET',
//         data: {'x_value': 0, 'y_value': 0, 'r_value': 0, 'count': countDots, 'command': 'change'},
//     }).done(moreShoot)
// }
//
// setInterval(requestChange, 1000);
