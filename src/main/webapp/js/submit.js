document.getElementById('form').addEventListener("submit", submit);

// let pictureError = document.getElementById('picture_error');
// let boxes = document.getElementsByName('X');
//
// function getXValue() {
//     for (let i = 0; i < boxes.length; i++) {
//         if (boxes[i].checked) {
//             return boxes[i].value;
//         }
//     }
// }

function submit() {
    if (validate(document.querySelector('input[name="x_value"]:checked').value, document.getElementById("rArgument").value, document.getElementById("rArgument").value)) {
        sendRequest(document.querySelector('input[name="x_value"]:checked').value, document.getElementById("rArgument").value, document.getElementById("rArgument").value, "shoot");
    } else {
        let errorRow  = document.getElementById('error');
        errorRow.innerHTML = "Data not valid";
    }
}