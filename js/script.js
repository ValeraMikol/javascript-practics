/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'), // вытаскиваем елемент с картинкой
    genre = poster.querySelector('.promo__genre'),// вытаскиваем елемент с жанром
    movieList = document.querySelector('.promo__interactive-list');

 
adv.forEach(item => { //перебираем псевдомассив adv
    item.remove(); // удаляем елементы item
})

genre.textContent = "драма"; // меняем текст
poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {  // film каждый отдельный фильм написанный в массиве  i - номер по порядку
    movieList.innerHTML += `           
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
     `;
    
});
