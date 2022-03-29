async function fetchBlogTitle(API_URL) {

    if (API_URL === undefined) {
        return "";
    }
    
    const subDir = "/settings/BlogTitle"
    const apiUrl = API_URL + subDir;

    try {
        console.log("Attempting to fetch blog title from: " + apiUrl);
        let response = await fetch(apiUrl);
        console.log(response);
        let data = await response.text();
        console.log("Successfully fetched blog title!")
        return data;
    }
    catch {
        console.log("Failed to fetch blog title.");
        return "";
    }
}

export default fetchBlogTitle;