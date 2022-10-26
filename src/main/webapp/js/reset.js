document.querySelector("#buttonReset").onclick = function reset() {
    cleanWin()
    $.ajax({
        url: './processing',
        type: 'GET',
        data: {'x_value': 0, 'y_value': 0, 'r_value': 0, 'command': 'reset'},
    })

    reqRefresh()

    $.ajax({
        url: './change',
        type: 'POST',
        cache: false,
        dataType: "json",
        data: {
            'x_value': 0,
            'y_value': 0,
            'r_value': 0,
            'curTime': 0,
            'exeTime': 0,
            'result': 'resChange'
        }
    }).done(myes)
        .fail(errorChange)
    changeCome()
}

function cleanWin() {
    cleanError();
    console.log("resetBUM")
    let dots = document.getElementById('dot');
    if (dots == null) {
    } else {
        while (dots != null) {
            dots.remove();
            dots = document.getElementById('dot');
        }
    }
    let x = document.createElement('td');
    x.innerHTML = 'X';
    let y = document.createElement('td');
    y.innerHTML = 'Y';
    let r = document.createElement('td');
    r.innerHTML = 'R';
    let current_time = document.createElement('td');
    current_time.innerHTML = 'Current time';
    let execution_time = document.createElement('td');
    execution_time.innerHTML = 'Execution time';
    let result = document.createElement('td');
    result.innerHTML = 'Result';
    let who = document.createElement('td');
    who.innerHTML = 'Who';
    let start_row = document.createElement('tr');

    start_row.appendChild(x);
    start_row.appendChild(y);
    start_row.appendChild(r);
    start_row.appendChild(current_time);
    start_row.appendChild(execution_time);
    start_row.appendChild(result);
    start_row.appendChild(who);

    start_row.setAttribute('class', 'startTable');
    start_row.setAttribute('id', 'startTable');

    let table_new = document.createElement('table');
    table_new.setAttribute('class', 'historyTable');
    table_new.setAttribute('id', 'historyTable');

    table_new.appendChild(start_row);

    let table = $('#historyTable');

    table.replaceWith(table_new);
}