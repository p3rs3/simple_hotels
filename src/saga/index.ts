import {all} from "redux-saga/effects"
import { authWatcher } from "./auth/watchers"

export function* rootWatcher() {
    yield all([authWatcher()])
}