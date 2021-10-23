export const login = () => {
    localStorage.setItem('isAuth', 'true');
}

export const logout = () => {
    localStorage.setItem('isAuth', '');
}