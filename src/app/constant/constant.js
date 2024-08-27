'use client'
export const BASE_URL = "https://elearningnew.cybersoft.edu.vn/api";
export const TOKENCYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MyIsIkhldEhhblN0cmluZyI6IjE2LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTAzNjgwMDAwMCIsIm5iZiI6MTY5Njg3MDgwMCwiZXhwIjoxNzI5MTg0NDAwfQ._HrEe-Nmfst4upbWtIGcUIJ6CIbknZMHAlp8JbVhlRA";
export const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  } else {
    return null;
  }
};

