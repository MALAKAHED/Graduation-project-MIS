import axios from 'axios';

const api = axios.create({
    // ده عنوان الباك-إند (المخ) اللي شغال على 8000
    baseURL: 'http://127.0.0.1:8000/api/', 
});

// إضافة الـ Token تلقائياً لأي طلب (عشان م يرفضش الدخول)
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;