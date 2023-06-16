const apiKey = '1f804abc9bf5432db60cbe929928d81f';

export const getArticles = () => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

  return fetch(url)
    .then((res) => res.json());
};


export default getArticles;