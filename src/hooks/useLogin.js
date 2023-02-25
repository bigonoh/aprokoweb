import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { base_url } from "../utils/base";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${base_url}/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json.data));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json.data });

      //update the isLoading state
      setIsLoading(false);
    }
  };

  return { error, isLoading, login };
};
