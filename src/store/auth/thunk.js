import { createAsyncThunk } from "@reduxjs/toolkit";
import { qlNguoiDungServices } from "@/app/service/qlNguoiDung.service";

export const loginThunk = createAsyncThunk(
    'quanLyNguoiDung/login',
    async (payload, { rejectWithValue}) => {
        try {
            const result = await qlNguoiDungServices.dangNhap(payload)
            return result.data.content
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const registerThunk = createAsyncThunk (
    'quanLyNguoiDung/login',
    async (payload, {rejectWithValue}) => {
        try {
            return await qlNguoiDungServices.dangKy(payload)
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const editUserThunk = createAsyncThunk('quanLyNguoiDung/edit', async (formData, {rejectWithValue}) => {
    try {
        const response = await qlNguoiDungServices.editUser(formData)
        return response
    } catch (err) {
        return rejectWithValue("Lỗi khi gửi yêu cầu cập nhật user: " + err.message);
    }
})