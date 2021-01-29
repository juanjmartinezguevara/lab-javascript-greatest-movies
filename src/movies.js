// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(dirArr) {
    return dirArr.map((movie) => {return movie.director})
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    return array.filter((movie) => {
      const directedStevenS = movie.director == 'Steven Spielberg';
      const dramaMovie = movie.genre.includes('Drama');
      return directedStevenS && dramaMovie;
    }).length
  }


// Iteration 3: All rates average - Get the average of all rates with 2 decimals



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let filteredDramaMovies = array.filter((eachMovie) => {
      return eachMovie.genre.includes('Drama');
    });
  
    return ratesAverage(filteredDramaMovies);
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
