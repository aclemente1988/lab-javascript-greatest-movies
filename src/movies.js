// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const allDirectors = movies.map (x => x.director)
    return allDirectors.filter((elem, index, allDirectors) => allDirectors.indexOf(elem) === index);
}

   
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const howMany = movies.filter((x) =>x.director === 'Steven Spielberg' && x.genre.includes('Drama')).length
    return howMany
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    const scores = movies.reduce ((accu, current)=> accu + current.score,0);
    const averageScore =  scores/movies.length;
    return Math.round(averageScore,2);
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaScore = movies.filter (x => x.genre.includes("Drama"));
    const avgDramaScore = dramaScore.reduce ((accu, current)=> accu + current.score,0);
    return avgDramaScore/dramaScore.length
    
    
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let newMoviesArray = [...movies];
    
    newMoviesArray.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (b.year > a.year) {
        return -1;
      } else {
        if (a.title > b.title) {
          return 1;
        } else if (b.title > a.title) {
          return -1;
        }
        else return 0
      }
    });
    return newMoviesArray;
  }




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let newOrderAlphabetically = [...movies];

    newOrderAlphabetically.sort ((a, b) => {
        if (a.title> b.title) {
            return 1;
        } else if (b.title> a.title) {
            return -1;
        }
        else return 0
    });
    
    
     return newOrderAlphabetically.map ((x) => x.title).slice(0,20);
   
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const hoursToMinutes = movies.map ((x) => x.duration);
    const hoursToMinutessplit = hoursToMinutes.split(1);
    return hoursToMinutessplit[0] *60;
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
