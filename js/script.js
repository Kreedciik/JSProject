"use strict";

let personalMovieDb = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){

        this.count = +prompt( 'Сколько фильмов вы просмотрели?', 1 );
        while( this.count === '' || 
            this.count === null || 
            isNaN(this.count) || 
            this.count === ' ' ){
            
            this.count = +prompt( 'Сколько фильмов вы просмотрели?', 1 );
        }
    },
    rememberMyFilms: function(){

        for( let i = 0; i < 2; i++ ){

            let a = prompt( 'Один из последних просмотренных фильмов?', '' ),
            b = prompt( 'На сколько оцените его?', '' );
    
            if( a != '' && b != '' && a!= null && b!= null && a.length < 50 ){
    
                personalMovieDb.movies[a] = b;
    
            } else{
    
                i--;
            }
        }
    },
     detectPersonalLevel: function(){

        if( personalMovieDb.count < 10 ){

            alert( 'Просмотрено довольно мало фильмов' );
        } else if( personalMovieDb.count >= 10 && personalMovieDb.count <= 30 ){
    
            alert( 'Вы классический зритель' );
        } else if( personalMovieDb.count > 30 ){
    
            alert( 'Вы киноман' );
        } else{
    
            alert( 'Произошла ошибка' );
        }

    },
    writeYourGenres: function(){

        for( let i = 1; i <= 3; i++ ){

            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if( genre !== null && genre !== '' && genre !== ' ' ){
            personalMovieDb.genres[i - 1] = genre;}
            else{

                i--;
            }
        }

        personalMovieDb.genres.forEach( ( item, index ) => {

            console.log(`Любимый жанр под номером ${index + 1} - это ${item}`);
        } );
    },
    showMyDB: function(hidden){

        if( !hidden )
        console.log(personalMovieDb); 
    },
    toggleVisibleMyDB: function(){

        if( personalMovieDb.privat ){
            personalMovieDb.privat = false;
        } else{

            personalMovieDb.privat = true;
        }
    }
};

personalMovieDb.start();
personalMovieDb.rememberMyFilms();
personalMovieDb.detectPersonalLevel();
personalMovieDb.writeYourGenres();
personalMovieDb.toggleVisibleMyDB();
personalMovieDb.showMyDB(personalMovieDb.privat);

    console.log( personalMovieDb );