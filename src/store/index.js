import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

// all api calling using rtk query
import userApis from "./user/userApis";

// redux state slices
import commonSlice from "./common/commonSlice";

// axios interceptor
import axiosInterceptor from "../helpers/axios";

const reducers = {
    [commonSlice.name]: commonSlice.reducer,

    [userApis.reducerPath]: userApis.reducer,
};

const initialState = {};

const rootReducer = combineReducers(reducers);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        }).concat([
            userApis.middleware,
        ]);
    },
    devTools: true,
    preloadedState: initialState,
    enhancers: (defaultEnhancers) => [...defaultEnhancers]
});


export const useAppSelector = () => useSelector(rootReducer);
export const useAppDispatch = () => useDispatch(store.dispatch);

axiosInterceptor(store.dispatch);

export default store;