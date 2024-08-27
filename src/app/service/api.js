'use client'
import axios from 'axios';
import { BASE_URL, TOKENCYBERSOFT, getAuthToken } from '@/app/constant/constant.js';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${getAuthToken()}`,
    TokenCybersoft: TOKENCYBERSOFT,
    'Content-Type': 'application/json'
  },
});
