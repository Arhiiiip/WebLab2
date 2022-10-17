// function add_bean(data) {
//     let newElement = "<tr>";
//     newElement += "<td>" + data.X + "</td>";
//     newElement += "<td>" + y + "</td>";
//     newElement += "<td>" + r + "</td>";
//     newElement += "<td>" + currentTime + "</td>";
//     newElement += "<td>" + executionTime + "</td>";
//     newElement += (result === "false" || result === undefined)
//         ? "<td><span style='color: red'>false</span></td>"
//         : "<td><span style='color: #0fc40f'>true</span></td>";
//     newElement += "</tr>";
//     $('#results tr:last').after(newElement);
// }

{
    let countTag = 0;
    count_rows = count_rows + 1;
    cleanError();
    let start_row = $('startTable');
    let real_row = $('tr');
    for (let i in data) {
        let info = document.createElement('td');
        info.innerHTML = data[i];
        countTag = countTag + 1;
        if (i === "RESULT" || i === "result") {
            if (data[i] === "false" || data[i] === undefined) {
                info.setAttribute("style", "color: red")
            } else {
                info.setAttribute("style", "color: #0fc40f")
            }
        }
        real_row.appendChild(info);
    }
    start_row.after(real_row);
}