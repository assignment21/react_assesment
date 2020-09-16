exports function checkAuthentication() {
    if (localStorage.getItem('user_token')) {
        return true;
    } else {
        return false;
    }
}