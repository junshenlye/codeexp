const apiKey = '1bdae09bbd35452782bfd4f993df9a13';

export const getArticles = () => {
  const url = `https://newsapi.org/v2/everything?q=Accountancy news&apiKey=${apiKey}`;

  return fetch(url)
    .then((res) => {
      console.log(JSON.stringify(res));
      return res.json();
    });
};


export default getArticles;
