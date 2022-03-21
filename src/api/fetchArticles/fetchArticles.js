async function fetchArticles(API_URL) {

    //TODO Don't hard-code this.
    const subDir = "/api/articles";

    const apiUrl = API_URL + subDir;
    // const apiUrl = process.env.REACT_APP_BACK_END_CONTAINER;

    try
    {
      console.log("Attempting to fetch articles from: " + apiUrl);
      let response = await fetch(apiUrl);
      let data = await response.json();
      console.log("Successfully fetched articles!")
      return data;
    }
    catch
    {
      console.log("Failed to fetch articles...");
      return({});
    }
}

export default fetchArticles;