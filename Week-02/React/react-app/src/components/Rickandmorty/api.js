export const fetchCharactersByName = async (name) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
  const data = await response.json();
  return data.results;
};
