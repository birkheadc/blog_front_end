async function fetchBlogSubtitle(API_URL) {
    
    if (API_URL === undefined) {
        return "";
    }

    const subDir = "/settings/BlogSubTitle"
    const apiUrl = API_URL + subDir;

    try {
        console.log("Attempting to fetch blog subtitle from: " + apiUrl);
        let response = await fetch(apiUrl);
        let data = await response.text();
        console.log("Successfully fetched blog subtitle!")
        return data;
    }
    catch {
        console.log("Failed to fetch blog subtitle.");
        return "";
    }
}

export default fetchBlogSubtitle;