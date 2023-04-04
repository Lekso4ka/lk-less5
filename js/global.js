const box = document.querySelector(".container");
const addBtn = document.querySelector(".add-btn");
const mdBox = document.querySelector(".modal-container");
const mdClose = mdBox.querySelector(".modal-close");
const addForm = document.forms.add;

/* 
    Вс е хранится как текст (в виде строки)
    localStorage
        .getItem(name);
        .setItem(name, "value")
*/

let user = localStorage.getItem("cat12"); // имя пользователя
if (!user) {
    user = prompt("Ваше уникальное имя: ", "lk12");
    localStorage.setItem("cat12", user);
}

const path = `https://cats.petiteweb.dev/api/single/${user}`;
// const path = `https://cats.petiteweb.dev/api/single/lk12`;

/*
    1)
        При загрузке страницы проверять, есть ли коты в LS?
        Если коты уже были в LS - отрисовывать сайт с ними
        Иначе - отправлять сетевой запрос и просить данные с котами (у БД)
*/
let cats = localStorage.getItem("cats-data") // массив с котами

if (cats) {
    try {
        cats = JSON.parse(cats); // сделать из строки объект
        console.log(cats);
        for (let cat of cats) {
            createCard(cat);
        }
    } catch(e) {
        cats = null;
    }
}

// let a = 2;
// let b = a;
// b = 6;
// console.log("a", a, ", b", b);

// let c = {a: 2, b: 3}
// let d = {...c, c: 5, a: 4}; // деструктуризация (копирование объекта или массивва)
// c.a = 6;
// console.log("c", c, ", d", d);
