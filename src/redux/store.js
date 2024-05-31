import {combineReducers, configureStore} from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {persistReducer} from "redux-persist";
import auth from "./reducers/auth";


const reducers = combineReducers({auth});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;