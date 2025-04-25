import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { loginUser } from '../query/auth';

export const useLogin = () => {
    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            toast.success(`Welcome back!`);
        },
        onError: (error: any) => {
            const message = error.response?.data?.message || 'Login failed';
            toast.error(message);
        },
    });
};