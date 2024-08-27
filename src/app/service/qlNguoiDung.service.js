'use client'
import axios from "axios";
import { api } from "./api";

export const qlNguoiDungServices = {
  dangNhap: (payload) =>
    axios.post(
      "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      payload,
      {
        headers: { TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMCIsIkhldEhhblN0cmluZyI6IjAxLzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTE0ODgwMDAwMCIsIm5iZiI6MTY5ODY4NTIwMCwiZXhwIjoxNzI1Mjk2NDAwfQ.CPY1b9IiMcklQZ9hjqIzrdiOlQ5YnV4VpzGu_yZr7G0' },
      }
    ),

  dangKy: (payload) =>
    axios.post(
      "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      payload,
      {
        headers: { TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMCIsIkhldEhhblN0cmluZyI6IjAxLzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTE0ODgwMDAwMCIsIm5iZiI6MTY5ODY4NTIwMCwiZXhwIjoxNzI1Mjk2NDAwfQ.CPY1b9IiMcklQZ9hjqIzrdiOlQ5YnV4VpzGu_yZr7G0' },
      }
    ),

    getDetailUser: async () => {
      return api.post(`${BASE_URL}/QuanLyNguoiDung/ThongTinTaiKhoan`);
    },

    editUser: async (formData) => {
      try {
        const response = await api.put(
          "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
          formData
        );
  
        const payload = {
          ...response.data,
          headers: {
            "content-type": response.headers["content-type"],
          },
        };
  
        return payload;
      } catch (error) {
        throw error;
      }
    },
};
