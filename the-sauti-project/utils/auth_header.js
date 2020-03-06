export function authHeader(){
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return {"Authorization": "bearer" + user.token}
    } else {
        return {}
    }
}