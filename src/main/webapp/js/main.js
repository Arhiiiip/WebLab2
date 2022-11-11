$('form').on('submit', function (event) {
        event.preventDefault()
        cleanError()
        let r = document.getElementById("rArgument").value
        let y = document.getElementById("yArgument").value
        try {
            let x = document.querySelector('input[name="xArgument"]:checked').value
            if (validate(y)) {
                $.ajax({
                    url: './processing',
                    type: 'GET',
                    data: {'x_value': x, 'y_value': y, 'r_value': r, 'command': 'shoot'},
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

function oneShoot(data) {
    console.log(data)
    let x = data[data.length - 1].x
    let y = data[data.length - 1].y
    let r = data[data.length - 1].r
    let result = data[data.length - 1].result
    let color = data[data.length - 1].color
    console.log(x, y, r, result)
    shoot(x, y, r, result, color)
    let masForRow = data.slice(0)
    add_row(masForRow[data.length - 1])
    let masForChange = data.slice(0)
    requestChange(masForChange[data.length - 1], 'change')
}

function cleanError() {
    let errorRow = document.getElementById('error');
    errorRow.innerHTML = '';
}

window.onload = function (event) {
    event.preventDefault()
    reqRefresh()
    let xBoxes = document.forms[0].elements.xArgument;
    for (let box of xBoxes) {
        box.onclick = (event) => {
            xBoxes.forEach(box => {
                if (box !== event.target) box.checked = false;
            })
        }
    }
}
