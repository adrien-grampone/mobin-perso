
const url = process.env.SERVER_URL

export const getAdherents = `${url}/adherents?_start=0&_limit=100000`

export const getAdherent = id => `${url}/adherents/${id}`