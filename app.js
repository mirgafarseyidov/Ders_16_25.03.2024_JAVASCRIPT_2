



const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzZlMWExMTQ4NTIxZDc1ZjRhMmNjYThhNzRkZDFkZiIsInN1YiI6IjY2MGVlNWE4MzU4MThmMDE0OTM5NzcwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5LvRxZQhZ38k5cu6L5IXPZi9HYM-TG-5gUkhdp0TBrE'
    }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
  
    .then((data) => data.results.map((movie) => console.log(`%cFilmin adi: ${ movie.title }, IMDB Bali: ${ movie.vote_average}, Buraxilis ili: ${ movie.release_date }`, `color: blue`)))