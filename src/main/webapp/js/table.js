function add_row(data) {
    let countTag = 0;
    cleanError();
    let start_row = document.getElementById('startTable');
    let real_row = document.createElement('tr');
    for (let i in data){
        let info = document.createElement('td');
        info.innerHTML = data[i];
        real_row.appendChild(info);
        countTag = countTag + 1;
    }
    start_row.after(real_row);
}