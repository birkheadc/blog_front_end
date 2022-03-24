async function fetchArticleByTitle(API_URL, title) {

    const subDir = "/articles/title/" + title;
    const apiUrl = API_URL + subDir;

    try
    {
      console.log("Attempting to fetch article from: " + apiUrl);
      let response = await fetch(apiUrl);
      if (!response.ok) {
          console.log("Fetched something unexpected.")
          return({});
      }
      let data = await response.json();
      console.log("Successfully fetched!")
      return data;
    }
    catch
    {
      console.log("Failed to connect...");
      return({});
    }
}

export default fetchArticleByTitle;