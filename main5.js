document.getElementById('calendar-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (month < 1 || month > 12 || isNaN(year)) {
        alert('Please enter a valid month and year.');
        return;
    }

    generateCalendar(month, year);
});

function generateCalendar(month, year) {
    const calendarContainer = document.getElementById('calendar');
    calendarContainer.innerHTML = '';

    const date = new Date(year, month - 1, 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    const startDay = date.getDay();
    const adjustedStartDay = (startDay === 0) ? 6 : startDay - 1;


    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];


    weekDays.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);


    let currentDay = 1;
    let row = document.createElement('tr');


    for (let i = 0; i < adjustedStartDay; i++) {
        const td = document.createElement('td');
        td.classList.add('empty');
        row.appendChild(td);
    }


    for (let i = adjustedStartDay; i < 7; i++) {
        const td = document.createElement('td');
        td.textContent = currentDay;
        row.appendChild(td);
        currentDay++;
    }
    table.appendChild(row);



    while (currentDay <= daysInMonth) {
        row = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            if (currentDay <= daysInMonth) {
                const td = document.createElement('td');
                td.textContent = currentDay;
                row.appendChild(td);
                currentDay++;
            } else {
                const td = document.createElement('td');
                td.classList.add('empty');
                row.appendChild(td);
            }
        }
        table.appendChild(row);
    }

    calendarContainer.appendChild(table);
    calendarContainer.style.display = 'block';
}
