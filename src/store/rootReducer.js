import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "@/store/auth/slice.js";

export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
})