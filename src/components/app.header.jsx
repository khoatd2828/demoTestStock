"use client";
import React from "react";
import Link from "next/link";
import { Button, Menu } from "antd";

const Header = () => {
  return (
    <header className="header">
      <Link className="logo" href='/dashboard'>
        <img src="/img/logo.png" alt="GoStock"  className="cursor-pointer"/>
      </Link>
      <Menu mode="horizontal" className="nav">
        <Menu.Item key="home">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <Link href="/dashboard">Dashboard</Link>
        </Menu.Item>
      </Menu>
      <div className="auth-buttons">
        <Link href="/login">
          <Button type="text" className="login-btn">
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button type="text" className="signup-button">
            Sign Up
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
