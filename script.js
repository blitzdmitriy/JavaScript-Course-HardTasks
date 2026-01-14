'use strict'; 

const screen = document.querySelector('p')
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение']
let date = new Date()
if (date.getDay() == 0) {
    week[6] = week[6].bold()
} else {
    week[date.getDay() - 1] = week[date.getDay() - 1].bold()
}

week.forEach((day, ind) => {
    if (ind > 4) {
        screen.insertAdjacentHTML('beforeend', `<i>${day}</i><br>`)
    } else {
        screen.insertAdjacentHTML('beforeend', `${day}<br>`)
    }
})