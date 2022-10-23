$('form').on('submit', function (event) {
        event.preventDefault()
        cleanError()
        let r = document.getElementById("rArgument").value
        let y = document.getElementById("yArgument").value
        try {
            let x = document.querySelector('input[name="xArgument"]:checked').value
            let session = session_id();
            if (validate(y)) {
                $.ajax({
                    url: '/WebLab2_1_0_SNAPSHOT_war/processing',
                    type: 'GET',
                    data: {'x_value': x, 'y_value': y, 'r_value': r, 'session': session, 'command': 'shoot'},
                }).done(oneShoot)
                    .fail(processError)
            } else {
                let errorRow = document.getElementById('error');
                errorRow.innerHTML = "Data not valid";
            }
        } catch (TypeError) {
            let errorRow = document.getElementById('error');
            errorRow.innerHTML = "Enter X please";
        }

    }
)

function processError(xhr, status, errorThrown) {
    let errorRow = document.getElementById('error');
    errorRow.innerHTML = "Server have trouble";
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
}

function session_id() {
    return /SESS\w*ID=([^;]+)/i.test(document.cookie) ? RegExp.$1 : false;
}

function oneShoot(data) {
    console.log(data)
    let x = data[data.length - 1].x
    let y = data[data.length - 1].y
    let r = data[data.length - 1].r
    let result = data[data.length - 1].result
    console.log(x, y, r, result)
    shoot(x, y, r, result)
    add_row(data[data.length - 1])
}

function cleanError() {
    let errorRow = document.getElementById('error');
    errorRow.innerHTML = '';
}

window.onload = function (event) {
    event.preventDefault()
    let session = session_id();
    $.ajax({
        url: './processing',
        type: 'GET',
        data: {'x_value': 0, 'y_value': 0, 'r_value': 0, 'session': session, 'command': "refresh"},
        success: function (data) {
            refreshShoot(data)
        }
    })


    let xBoxes = document.forms[0].elements.xArgument;
    for (let box of xBoxes) {
        box.onclick = (event) => {
            xBoxes.forEach(box => {
                if (box !== event.target) box.checked = false;
            })
        }
    }
}
