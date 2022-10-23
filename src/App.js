import React, { useEffect, useState } from "react";
import { globalConstants } from "./constants";
import Loader from "./components/Loader";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import { useRecoilState } from "recoil";
import { AccessJwt } from "./data/accessJwt";
import { axiosInstance } from "./network/axiosInstance";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [accessJwt, setAccessJwt] = useRecoilState(AccessJwt);

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.post("/auth/generateAccessJwt");
      if (
        response.status === 200 &&
        response.data.status === globalConstants.status.SUCCESS
      ) {
        setIsLoading(false);
        setIsAuthenticated(true);
        setAccessJwt(response.data.data.accessJwtToken);
      } else {
        setIsLoading(false);
        setIsAuthenticated(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return isAuthenticated || accessJwt != null ? <Profile /> : <LoginForm />;
}
