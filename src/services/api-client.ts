import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

const key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const apiClient = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${key}`,
  },
});

// refetchOnWindowFocus
// refetchOnReconnect
// refetchInterval

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 10 * 60 * 1000,
    },
  },
});
