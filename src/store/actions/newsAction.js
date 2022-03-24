export const TOP_HEADLINES = 'TOP_HEADLINES';
import {API_KEY} from '../../../env.json'

export const fetchNews = () => {
    return async (dispatch) => {
        try{
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`, 
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            const resData = await response.json();
            console.log("Response of Object", resData);
            dispatch({
                type: TOP_HEADLINES,
                top_headlines: resData.articles
            })

        } catch (err) {
            console.log("Error in Fetching News", err);
        }
    };
};