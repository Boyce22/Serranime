async function fetchAnimeNews() {
    const url = 'https://animenewsnetwork.p.rapidapi.com/news.xml?nlist=50';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1b56f50ff7msh2ccdb2dcdd31468p1df031jsnad933cd658ca',
            'X-RapidAPI-Host': 'animenewsnetwork.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchAnimeNews();
