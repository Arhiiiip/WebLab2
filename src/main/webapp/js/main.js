$('form').on('submit', function (event) {
        event.preventDefault()
        let r = document.getElementById("rArgument").value
        let y = document.getElementById("yArgument").value
        let x = document.querySelector('input[name="xArgument"]:checked').value
        let session = session_id();
        if (validate(x, y, r)) {
            $.ajax({
                url: './processing',
                type: 'GET',
                data: {'x_value': x, 'y_value': y, 'r_value': r, 'session': session, 'command': "shoot"},
                success: function (data) {
                    oneShoot(data)
                }
            })
        } else {
            let errorRow = document.getElementById('error');
            errorRow.innerHTML = "Data not valid";
        }
    }
)

// function processError(xhr, status, errorThrown) {
//     alert("Sorry, there was a problem!");
//     console.log("Error: " + errorThrown);
//     console.log("Status: " + status);
//     console.dir(xhr);
// }

function session_id() {
    return /SESS\w*ID=([^;]+)/i.test(document.cookie) ? RegExp.$1 : false;
}

function oneShoot(data) {
    let x = data.toArray()[data.size() - 1].x
    let y = data.toArray()[data.size() - 1].y
    let r = data.toArray()[data.size() - 1].r
    let result = data.toArray()[data.size() - 1].result
    shoot(x, y, r, result)
}

function cleanError() {
    let errorRow = $('error');
    errorRow.innerHTML = '';
}

window.onload = function (event) {
    event.preventDefault()
    $.ajax({
        url: './processing',
        type: 'GET',
        data:
            "&command=" + "refresh",
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
