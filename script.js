document.addEventListener('DOMContentLoaded', function () {
  const movieListContainer = document.getElementById('movie-list');

  // Mock data for featured movies (replace with actual data or fetch from a server)
  const movies = [
    { title: 'Movie 1', image: 'movie1.jpg', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Movie 2', image: 'movie2.jpg', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Movie 3', image: 'movie3.jpg', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  // Populate movie list on the homepage
  movies.forEach(movie => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');
    movieItem.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <p>${movie.title}</p>
    `;
    movieItem.addEventListener('click', function () {
      // Navigate to the movie details page dynamically (for a complete SPA, you'd handle this differently)
      document.getElementById('movie-details').innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.image}" alt="${movie.title}">
        <p>${movie.details}</p>
      `;
    });

    movieListContainer.appendChild(movieItem);
  });
});
 