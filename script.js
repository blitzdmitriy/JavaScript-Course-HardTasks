let partA = document.querySelector('.partA')
let partB = document.querySelector('.partB')
let date = new Date()
const week = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

function declension(word, num) {
    if (word == 'час') {
        if ((num > 4 && num < 21) || num % 10 > 4 || num % 10 == 0) {
            return 'часов'
        } else if (num % 10 == 1) {
            return 'час'
        }
        return 'часа'
    }else{
        if ((num > 4 && num < 21) || num % 10 > 4 || num % 10 == 0) {
            return word
        } else if (num % 10 == 1) {
            return word + 'а'
        }
        return word + 'ы'
    }
}


setInterval(function () {
    date = new Date()
    partA.innerHTML = `Сегодня ${week[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года, ${date.getHours()} ${declension('час', date.getHours())} ${date.getMinutes()} ${declension('минут', date.getMinutes())} ${date.getSeconds()} ${declension('секунд', date.getSeconds())}`
    partB.innerHTML = date.toLocaleDateString() + ' - ' + date.toLocaleTimeString()
}, 1000)

function zero(num) {
   return num < 10 ? '0' + num : num
}

console.log(zero(9));

    
