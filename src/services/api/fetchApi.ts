import { toast } from "sonner";
import { signOut } from "next-auth/react";

type Methods = "POST" | "GET" | "DELETE" | "PUT" | "PATCH";

const fetchApi = async (
  method: Methods,
  url: string,
  requestData?: any,
  needToken?: boolean
) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const endpoint = `${apiUrl}/${url}`;
    let headers: Record<string, string> = {};

    if (method !== "GET" && method !== "DELETE") {
      headers["Content-Type"] = "application/json";
    }

    if (needToken) {
      const token = localStorage.getItem("authApiToken");
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      } else {
        console.log("Token is missing.");
      }
    }

    const options: RequestInit = {
      method,
      headers,
    };

    if (method !== 'GET' && method !== 'DELETE') {
      options.body = requestData === null ? null : JSON.stringify(requestData);
    }

    const response = await fetch(endpoint, options);
    const data = await response.json();

    if (!response.ok) {
      if (response.status === 403 && data.error === "Invalid token") {
        //TODO to test
        toast.error("Session expired. Please login again.");
        setTimeout(() => {
          signOut();
        }, 3000);
        return false;
      }
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
    }

    if (response.status === 204) {
      toast.success("Suppression réussie.");
      return true;
    }

    if (response.status === 201) {
      toast.success("Création réussie.");
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchApi;
