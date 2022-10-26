function add_row(data) {
    let countTag = 0;
    cleanError();
    let start_row = document.getElementById('startTable');
    let real_row = document.createElement('tr');
    for (let i in data) {
        if (i === 'color') {
            if (data[i] === 'red') {
                let info1 = document.createElement('td');
                info1.innerHTML = 'false';
                real_row.appendChild(info1);
                countTag = countTag + 1;
                let info = document.createElement('td');
                info.innerHTML = 'your';
                real_row.appendChild(info);
                countTag = countTag + 1;
                continue
            } else if (data[i] === 'green') {
                let info1 = document.createElement('td');
                info1.innerHTML = 'true';
                real_row.appendChild(info1);
                countTag = countTag + 1;
                let info = document.createElement('td');
                info.innerHTML = 'your';
                real_row.appendChild(info);
                countTag = countTag + 1;
                continue
            } else {
                let info1 = document.createElement('td');
                info1.innerHTML = 'PRIVATE'
                real_row.appendChild(info1);
                countTag = countTag + 1;
                let info = document.createElement('td');
                info.innerHTML = 'not your'
                real_row.appendChild(info);
                countTag = countTag + 1;
                continue
            }
        }
        let info = document.createElement('td');
        info.innerHTML = data[i];
        real_row.appendChild(info);
        countTag = countTag + 1;
    }
    start_row.after(real_row);
}