import { takeEvery } from "@redux-saga/core/effects"
import { AuthActionEnum } from "../../store/reducers/auth/types"
import { loginWorker, logoutWorker } from "./workers"

export function* authWatcher() {
    yield takeEvery(AuthActionEnum.LOGIN, loginWorker)
    yield takeEvery(AuthActionEnum.LOGOUT, logoutWorker)
}