import { applyMiddleware, combineReducers, createStore } from "redux";
import reducers from "./reducers";  
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootWatcher)