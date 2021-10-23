export interface AuthState {
    isAuth: boolean;
}

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export interface SetIsAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}

export type AuthAction = 
SetIsAuthAction