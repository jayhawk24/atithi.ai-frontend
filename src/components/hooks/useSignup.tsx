import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { signupUser } from '../query/auth';

export const useSignup = () => {
    return useMutation({
        mutationFn: signupUser,
        onSuccess: (data) => {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            toast.success(`Welcome aboard!`);
        },
        onError: (error: any) => {
            const message = error.response?.data?.message || 'Signup failed';
            toast.error(message);
        },
    });
};