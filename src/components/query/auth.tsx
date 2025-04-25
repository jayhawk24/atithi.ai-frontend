import axiosInstance from "@/lib/axios";

interface LoginPayload {
    email: string;
    password: string;
}

interface LoginResponse {
    access_token: string;
    refresh_token: string;
}
export const loginUser = async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await axiosInstance.post<LoginResponse>('/users/signin', payload);
    return response.data;
};

interface SignupPayload {
    email: string;
    password: string;
    name: string;
    role: string;
}
interface SignupResponse {
    access_token: string;
    refresh_token: string;
}
export const signupUser = async (payload: SignupPayload): Promise<SignupResponse> => {
    const response = await axiosInstance.post<SignupResponse>('/users/signup', payload);
    return response.data;
}