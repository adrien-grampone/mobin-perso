import jwt_decode from "jwt-decode";

export const isTokenValid = (token = null) => {
    if (!token) return false;
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        return false
    } else {
        return true
    }
}