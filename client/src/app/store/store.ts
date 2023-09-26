import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../../features/order/orderSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import reportSlice from "../../features/orderList/reportSlice";

export const store = configureStore({
    reducer: {
        order: orderSlice,
        report: reportSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

