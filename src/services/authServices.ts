import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "./api";
import { AxiosError } from "axios";
import { LoginPayload, LoginResponse } from "@/types";

//Login
const login = async (userData: LoginPayload): Promise<LoginResponse> => {
  try {
    const { data } = await api.post<LoginResponse>("/auth/login", userData);
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: login,
    retry: false,
  });
};

//Register
const register = async (userData: LoginPayload): Promise<LoginResponse> => {
  try {
    const { data } = await api.post<LoginResponse>("/auth/register", userData);
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const useRegister = () => {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: register,
    retry: false,
  });
};

//get current user
const getCurrentUser = async (): Promise<LoginResponse> => {
  try {
    const { data } = await api.get<LoginResponse>("/auth/me");
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const useGetCurrentUser = () => {
  return useQuery<LoginResponse, Error>({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: false, // don’t auto-retry on failure
  });
};
