function changeCome() {
    console.log("CHANGECOME")
    $.ajax({
        url: './change',
        type: 'GET',
    }).done(yeees)
        .fail(errorCRA)
}

function yeees(data) {
    if(data.answer === "resChange"){
        cleanWin()
        reqRefresh()
    }else if (data !== null) {
        let mas = [data]
        shootChange(mas)
    }
    changeCome()
}

function shootChange(data) {
    let x = data[data.length - 1].x
    let y = data[data.length - 1].y
    let r = data[data.length - 1].r
    let result = data[data.length - 1].result
    let color = data[data.length - 1].color
    console.log(x, y, r, result)
    shoot(x, y, r, result, color)
    add_row(data[data.length - 1])
}

function errorCRA() {
    changeCome()
}

changeCome()