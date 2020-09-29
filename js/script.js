'use strict'

let numberOfFilms;

function start(){

    while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms) || numberOfFilms === ' '){

        numberOfFilms = +prompt( 'Сколько фильмов вы просмотрели?', 1 );
    }
};

start();

let personalMovieDb = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    function rememberMyFilms(){

        for( let i = 0; i < 2; i++ ){

            let a = prompt( 'Один из последних просмотренных фильмов?', '' ),
            b = prompt( 'На сколько оцените его?', '' );
    
            if( a != '' && b != '' && a!= null && b!= null && a.length < 50 ){
    
                personalMovieDb.movies[a] = b;
    
            } else{
    
                i--;
            }
        };
    };

    rememberMyFilms();

    function detectPersonalLevel(){

        if( personalMovieDb.count < 10 ){

            alert( 'Просмотрено довольно мало фильмов' );
        } else if( personalMovieDb.count >= 10 && personalMovieDb.count <= 30 ){
    
            alert( 'Вы классический зритель' );
        } else if( personalMovieDb.count > 30 ){
    
            alert( 'Вы киноман' );
        } else{
    
            alert( 'Произошла ошибка' );
        }

    };

    detectPersonalLevel();

    function showMyDB(hidden){

        if( hidden === false )
        console.log(personalMovieDb);

    }

    function writeYourGenres(){

        for( let i = 1; i <= 3; i++ ){

            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDb.genres[i - 1] = genre;
        }
    };

    writeYourGenres();


    console.log( personalMovieDb );