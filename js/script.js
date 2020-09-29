'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', 1);
let personalMovieDb = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

    personalMovieDb.movies[a] = b;
    personalMovieDb.movies[c] = d;

    console.log(personalMovieDb);