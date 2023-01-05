const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for(let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
         personalMovieDb.movies[a] = b;
         console.log('done'); 
    }else {
        console.log('error');
        i--;
    }
   
}

console.log(personalMovieDb);


