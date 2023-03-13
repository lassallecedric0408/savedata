console.log('initialisation du script');

// Ton code ci dessous

async function renderAllFilms() {
  const response = await fetch('https://swapi.dev/api/films/');
  const films = await response.json();
  console.log(films);
}

async function renderOneFilm(id) {
  const response = await fetch(`https://swapi.dev/api/films/${id}/`);
  const film = await response.json();
  const characters = film.characters;
  const allcharacters = [];
  characters.forEach((character) => {
    fetch(`${character}`)
      .then((response) => response.json())
      .then((data) => {
        const characterData = {
          name: data.name,
          height: data.height === 'unknown' ? 100 : Number(data.height),
        };
        allcharacters.push(characterData);
      });
  });
  console.log(allcharacters);

  const heightSum = allcharacters.reduce((acc, { height }) => acc + height, 0);
  console.log(heightSum);

  function compareCharactersHeight(a, b) {
    if (a.height < b.height) {
      return -200;
    }
    if (a.height > height) {
      return 200;
    }
    return 0;
  }
  const sortByHeight = allcharacters.sort(compareCharactersHeight);
  console.log(sortByHeight);
}

renderAllFilms();
renderOneFilm(3);
