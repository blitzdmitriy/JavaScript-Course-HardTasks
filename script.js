let lang = prompt("Введите язык");
if (lang === "ru") console.log("Пн, Вт, Ср, Чт, Пт, Сб, Вс")
else if (lang === "en") console.log("Mon, Tue, Wed, Thu, Fri, Sat, San")

switch (lang) {
    case "ru":
        console.log("Пн, Вт, Ср, Чт, Пт, Сб, Вс")
        break;
    case "en":
        console.log("Mon, Tue, Wed, Thu, Fri, Sat, San")
    default:
        break;
}

let weekArr = [
    ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], 
    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "San"]
]

lang === "ru" ? console.log(...weekArr[0]) : console.log(...weekArr[1]);

let namePerson = prompt("Введите имя");
namePerson === "Артем" ? console.log("Директор") : namePerson === "Александр" ? console.log("преподаватель") : console.log("студент");
