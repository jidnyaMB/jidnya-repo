const getCharacters = async (term) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${term}`);
  const data = await response.json();
  return data.results || [];
};

export default getCharacters;
