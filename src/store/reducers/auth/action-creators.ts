import { AuthActionEnum, SetIsAuthAction, } from './types';

export const AuthActionCreators = {
    setIsAuth: (isAuth: boolean): SetIsAuthAction => {
        return {
            type: AuthActionEnum.SET_AUTH,
            payload: isAuth
        }
    },
    login: () => {
        return {
            type: AuthActionEnum.LOGIN,
        }
    },
    logout: () => {
        return {
            type: AuthActionEnum.LOGOUT,
        }
    },
}