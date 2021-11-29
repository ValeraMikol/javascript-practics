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
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]'); // Вытаскиваем чекбокс через атрибут


    addForm.addEventListener('submit', (event) => {    // навешиваем событие submit и добавляем Callback функцию
    event.preventDefault();         //отменяем стандартное поведение сайта


    const newFilm = addInput.value;
        const favorite = checkbox.checked;
        
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        if (favorite) {
            console.log('Добавляем любимый фильм');
        };

    movieDB.movies.push(newFilm); // метод push отправляет данные в массив с фильмами
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);

        event.target.reset();
});
 
const deleteAdv = (arr) => {
    arr.forEach(item => { //перебираем псевдомассив adv
        item.remove(); // удаляем елементы item
    });
};

deleteAdv(adv);

const makeChanges = () => {
    genre.textContent = "драма"; // меняем текст
    poster.style.backgroundImage = 'url("img/bg.jpg")';
};

makeChanges();


const sortArr = (arr) => {
    arr.sort();
};
sortArr(movieDB.movies);


movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {  // film каждый отдельный фильм написанный в массиве  i - номер по порядку
    movieList.innerHTML += `           
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
     `;
    
});

movieDB.movies.sort();
function createMovieList(films, parent) {
    parent.innerHTML = "";

  
    films.forEach((film, i) => {  // film каждый отдельный фильм написанный в массиве  i - номер по порядку
        parent.innerHTML += `           
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
     `;
    
    });
    
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice();
            createMovieList(movieDB.movies, movieList);
        });
    });
    createMovieList(movieDB.movies, movieList);
}