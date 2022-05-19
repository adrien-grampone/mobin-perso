
const url = process.env.SERVER_URL

export const getNews = `${url}/articles?_start=0&_limit=100000`
export const getNewsItem = id => `${url}/articles/${id}`