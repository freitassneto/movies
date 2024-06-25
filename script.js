const moviesList = [
  {
    title: "Matrix",
    poster: "./img/matrix-poster.jpg",
    genre: "Ficção Científica",
    rated: "R",
    stars: 4,
    synopsis: `O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro.`,
  },
  {
    title: "O Poderoso Chefão",
    poster: "./img/poderoso-chefao-poster.jpg",
    genre: "Drama",
    rated: "R",
    stars: 4,
    synopsis: `Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.`,
  },
  {
    title: "A Origem",
    poster: "./img/a-origem-poster.jpg",
    genre: "Ação",
    rated: "PG-13",
    stars: 5,
    synopsis: `Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império.`,
  },
  {
    title: "Pulp Fiction",
    poster: "./img/pulp-fiction-poster.jpg",
    genre: "Crime",
    rated: "R",
    stars: 3,
    synopsis: `Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.`,
  },
  {
    title: "Interestelar",
    poster: "./img/interestellar-poster.jpg",
    genre: "Aventura",
    rated: "PG-13",
    stars: 5,
    synopsis: `As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.`,
  },
  {
    title: "A Fugas das Galinhas",
    poster: "./img/fuga-das-galinhas-poster.jpg",
    genre: "Animação",
    rated: "G",
    stars: 4,
    synopsis: `Após frustradas tentativas de escapar da granja dos Tweedy, as galinhas, lideradas por Ginger, mantêm poucas esperanças. Mas, quando o galo voador Rocky aparece no galinheiro, elas acreditam que ele poderá ensiná-las a voar, e assim, uma nova luz surge no fim do túnel.`,
  },
  {
    title: "De Volta Para o Futuro",
    poster: "./img/de-volta-para-o-futuro-poster.jpg",
    genre: "Ficção Científica",
    rated: "PG-13",
    stars: 3,
    synopsis: `Um jovem aciona acidentalmente uma máquina do tempo construída por um cientista em um Delorean, retornando aos anos 50. Lá conhece sua mãe, antes ainda do casamento com seu pai, que fica apaixonada por ele. Tal paixão põe em risco sua própria existência, pois alteraria todo o futuro, forçando-o a servir de cupido entre seus pais.`,
  },
];

function createCard(movie) {
  const moviesUl = document.querySelector(".movies-list");
  const movieCard = document.createElement("li");
  const moviePoster = document.createElement("img");
  const movieContent = document.createElement("div");
  const movieInfo = document.createElement("div");
  const movieTitle = document.createElement("h3");
  const movieGenre = document.createElement("h4");
  const movieRating = document.createElement("span");
  const movieStarsDiv = document.createElement("div");
  const movieSynopsis = document.createElement("p");
  const movieActions = document.createElement("div");
  const buttonWatchlist = document.createElement("button");
  const buttonRentMovie = document.createElement("button");

  for (let i = 1; i <= 5; i++) {
    const starIcon = document.createElement("i");
    starIcon.classList.add("fa", "fa-star");
    if (i <= movie.stars) {
      starIcon.classList.add("star-checked");
    }
    movieStarsDiv.append(starIcon);
  }

  movieCard.className = "movie";
  moviePoster.className = "movie-poster";
  movieInfo.className = "movie-info";
  movieTitle.className = "movie-title";
  movieGenre.className = "movie-genre";
  movieSynopsis.className = "movie-synopsis";
  movieContent.className = "movie-content";
  movieRating.classList.add("movie-rating");
  movieStarsDiv.className = "movie-star-rating";
  movieActions.className = "movie-actions";
  buttonWatchlist.className = "movie-action-button";
  buttonRentMovie.className = "movie-action-button";

  if (movie.rated == "R") {
    movieRating.classList.add("movie-rating-r");
  } else if (movie.rated == "PG-13") {
    movieRating.classList.add("movie-rating-pg-13");
  } else if (movie.rated == "G") {
    movieRating.classList.add("movie-rating-g");
  }

  moviePoster.src = movie.poster;
  moviePoster.alt = `Poster do filme ${movie.title}`;

  movieTitle.innerText = movie.title;
  movieGenre.innerText = movie.genre;
  movieSynopsis.innerText = movie.synopsis;
  movieRating.innerText = movie.rated;
  buttonWatchlist.innerText = "Adicionar à Watchlist";
  buttonRentMovie.innerText = "Alugar";

  movieActions.append(buttonWatchlist, buttonRentMovie);
  movieInfo.append(
    movieTitle,
    movieGenre,
    movieRating,
    movieStarsDiv,
    movieSynopsis
  );
  movieContent.append(movieInfo, movieActions);
  movieCard.append(moviePoster, movieContent);
  moviesUl.append(movieCard);
}

function renderCards(list) {
  list.forEach((card) => {
    createCard(card);
  });
}
renderCards(moviesList);
