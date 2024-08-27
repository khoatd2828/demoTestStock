import { createSlice } from "@reduxjs/toolkit";
import { editUserThunk, loginThunk } from "./thunk";

const LOCAL_USER_LOGIN_KEY = "USER";
const initialState = {
};
export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editUserThunk.fulfilled, () => {
        toast.success('Bạn đã chỉnh sửa thông tin tài khoản!')
      })

      .addCase(editUserThunk.rejected, () => {
        toast.error('Đã xảy ra lỗi khi chỉnh sửa thông tin tài khoản!');
      })
      //login thunk
      .addCase(
        loginThunk.fulfilled,
        (state, payload) => {
          localStorage.setItem(LOCAL_USER_LOGIN_KEY, JSON.stringify(payload));
          state.userLogin = payload;
        }
      )
  },
});
