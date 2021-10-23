import { put } from "redux-saga/effects";
import { login, logout } from ".";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";

export function* loginWorker() {
    yield login();
    yield put(AuthActionCreators.setIsAuth(true))
};

export function* logoutWorker() {
    yield logout();
    yield put(AuthActionCreators.setIsAuth(false));
};