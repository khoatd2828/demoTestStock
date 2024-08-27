"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "@/store/auth/thunk";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      const resultAction = await dispatch(loginThunk(values));
      if (loginThunk.fulfilled.match(resultAction)) {
        toast.success("Đăng nhập thành công!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    } catch (error) {
      alert('Mật khẩu không đúng vui lòng nhập lại')
    }
  };

  return (
    <div className="auth-layout">
      <div className="auth-background"></div>
      <div className="auth-content">
        <div className="login-container">
          <div className="p-6">
            <h1
              style={{ fontSize: "24px", fontWeight: "bold" }}
              className="text-center mb-3"
            >
              ĐĂNG NHẬP
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-container">
                <label className="input-label" htmlFor="taiKhoan">
                  Tài khoản
                </label>
                <Controller
                  control={control}
                  name="taiKhoan"
                  rules={{ required: "Tài khoản không được để trống" }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      className="p-3"
                      placeholder="Nhập tài khoản"
                    />
                  )}
                />
                {errors.taiKhoan && (
                  <p className="error-message">{errors.taiKhoan.message}</p>
                )}
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="matKhau">
                  Mật khẩu
                </label>
                <Controller
                  control={control}
                  name="matKhau"
                  rules={{ required: "Mật khẩu không được để trống" }}
                  render={({ field }) => (
                    <Input.Password
                      {...field}
                      className="p-3"
                      placeholder="Nhập mật khẩu"
                    />
                  )}
                />
                {errors.matKhau && (
                  <p className="error-message">{errors.matKhau.message}</p>
                )}
              </div>

              <div className="button mb-2">
                <button
                  type="primary"
                  htmlType="submit"
                  className="login-button"
                >
                  Đăng nhập
                </button>
              </div>

              <div className="text-center">
                Bạn chưa có tài khoản?{" "}
                <Button
                  className="ms-3 mt-2 bg-black text-white"
                  style={{
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#555",
                    },
                  }}
                  onClick={() => navigate("/signup")}
                >
                  Đăng ký
                </Button>
              </div>
              <div className="text-center mt-3  ">
                <Link href='/change'>Quên mật khẩu?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
