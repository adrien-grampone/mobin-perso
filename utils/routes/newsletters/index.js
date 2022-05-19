
const url = process.env.SERVER_URL

export const getNewsletters = `${url}/newsletters?_start=0&_limit=100000`