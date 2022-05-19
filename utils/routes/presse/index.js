
const url = process.env.SERVER_URL

export const getRevuesPresse = `${url}/presse-revues?_start=0&_limit=100000`
export const getCommuniquesPresse = `${url}/presse-communiques?_start=0&_limit=100000`