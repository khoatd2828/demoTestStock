"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/app.header";
import Dashboard from "@/components/app.dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store/index.js";
import Home from "@/components/app.home";
import Login from "./auth/login/page";
import Register from "./auth/register/page";
import AuthLayout from "./auth/page";
import EditUser from "./auth/changepassword/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <div className="container mx-auto">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path='/change' element={<EditUser />} />
              </Routes>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<AuthLayout />}>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Register />} />
             </Route>
            </Routes>
            <ToastContainer />
          </Provider>
        </BrowserRouter>
      </body>
    </html>
  );
}
