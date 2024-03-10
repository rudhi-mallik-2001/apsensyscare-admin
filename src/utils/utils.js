import { redirect } from "react-router-dom";

export function getTokenValidDuration() {
    const storedTokenDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedTokenDate);
    const timeNow = new Date();
    const duration = expirationDate.getTime() - timeNow.getTime();
    return duration;
}
export function getAuthToken() {
    const token = localStorage.getItem('REFRESSTOKEN');
    console.log(token)
    if (!token) return null;

    const tokenDurationTime = getTokenValidDuration();

    if (tokenDurationTime < 0) {
        return 'TOKEN_EXPIRED';
    }

    return token;
}
export function checkTokenLoader() {
    const token = getAuthToken();
    
    if (!token) {
        return redirect('sign-in');
    }

    return null;
}
export function tokenLoader() {
    console.log('hello')
    return getAuthToken();
}