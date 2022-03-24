async function fetchArticleProfiles(API_URL) {

    const subDir = "/articles/profiles";

    const apiUrl = API_URL + subDir;

    try
    {
      console.log("Attempting to fetch article profiles from: " + apiUrl);
      let response = await fetch(apiUrl);
      let data = await response.json();
      console.log("Successfully fetched!")
      return data;
    }
    catch
    {
      console.log("Failed to fetch...");
      return({});
    }
}

export default fetchArticleProfiles;