/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';


let numberOfFilms  //помещаем в переменную ответ на вопрос от пользователя
    
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();

const personalMovieDB = { // создаём обьект 
    count: numberOfFilms, // в свойство count помещаем переменную с ответом
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     e = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = e;

// for (let i = 0; i < 2; i++){ //создаём цикл начинаем с 0 , цикл будет добавлять число пока не дойдёт до 2
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) { // сдесь мы задаём условия а не должна ровняться null, а не должна ровняться пустой строке, длина а не должна быть больше 50
//         personalMovieDB.movies[a] = b;// то что произойдет если условия будут выполнены
//         console.log('done');
//     } else { // то что произойдет если условие не выполниться
//         console.log('error');
//         i--;//если условие не выполнилось то мы вернёмся на одно повторение назад и вопросы зададуться еще раз
//     }

//     personalMovieDB.movies[a] = b;
// };

// if (personalMovieDB.count < 10) {
    
//     console.log('Просмотрено довольно мало фильмов!');
// }  

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++){
//        personalMovieDB.genres[i - 1] = prompt(`Ваш люьимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres();

