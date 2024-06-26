import { getSession, signOut } from "next-auth/react";
import { toast } from "sonner";

type Methods = "POST" | "GET" | "DELETE" | "PUT" | "PATCH";

interface ApiError {
  message: string;
  status: number;
}

const fetchApi = async <T>(
  method: Methods,
  url: string,
  requestData?: any,
  sendToken?: boolean | string
): Promise<T | boolean | null | ApiError> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const endpoint = `${apiUrl}/${url}`;
    let headers: Record<string, string> = {};

    if (method !== "GET" && method !== "DELETE") {
      headers["Content-Type"] = "application/json";
    }

    let token: string | null = null;
    //sendToken is a string when we are in server component cause we already have the token
    // if we are in server and don't have the token we will get it from the session before this function
    //sendToken is a boolean when we are in client component
    if (typeof sendToken === "string") {
      token = sendToken;
      headers.Authorization = `Bearer ${token}`;
    } else if (sendToken) {
      const session = await getSession();
      token = session?.account.id_token;
      headers.Authorization = `Bearer ${token}`;
    }

    const options: RequestInit = {
      method,
      headers,
    };

    if (method !== "GET" && method !== "DELETE") {
      options.body = requestData === null ? null : JSON.stringify(requestData);
    }

    const response = await fetch(endpoint, options);

    if (response.status === 204) {
      toast.success("Suppression réussie.");
      return true;
    }
    const data = await response.json();

    if (response.status === 403 && data.error === "Invalid token") {
      //TODO to test
      toast.error("Session expired. Please login again.");
      setTimeout(() => {
        signOut();
      }, 3000);
      return null;
    }

    if (!response.ok) {
      const errorMessage = data.error?.message || data.error;
      if (typeof window !== 'undefined') {
        toast.error(errorMessage);
      }
      if(response.status === 404 || response.status === 403){
        return { message: errorMessage, status: response.status };
      }
      return null;
    }

    if (response.status === 201) {
      toast.success("Création réussie.");
    }

    return data as T;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchApi;
