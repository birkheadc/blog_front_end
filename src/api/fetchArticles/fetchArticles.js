async function fetchArticles() {
    // TODO: don't hardcode this, have all of this as a global variable somewhere
    const hostname = window.location.hostname;
    const port = "5000";
    const subdir = "/api/articles";
    const apiUrl = "http://" + hostname + ":" + port + subdir;
    console.log(apiUrl);
    
    try
    {
      let response = await fetch(apiUrl);
      let data = await response.json();
      return data;
    }
    catch
    {
      return({});
    }
}

export default fetchArticles;