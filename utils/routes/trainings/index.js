
const url = process.env.SERVER_URL

export const getTrainings = `${url}/formations?_start=0&_limit=100000`

export const getTraining = id => `${url}/formations/${id}`