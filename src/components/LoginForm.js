import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { globalConstants } from "../constants";
import { AccessJwt } from "../data/accessJwt";
import { axiosInstance } from "../network/axiosInstance";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setAccessJwt = useSetRecoilState(AccessJwt);

  const loginUser = async () => {
    const response = await axiosInstance.post("/auth/login", {
      username,
      password,
    });
    if (
      response.status === 200 &&
      response.data.status === globalConstants.status.SUCCESS
    ) {
      setAccessJwt(response.data.data.accessJwt);
    }
  };

  return (
    <div
      className={`flex flex-col w-screen h-screen items-center justify-center`}
    >
      <input
        type={"text"}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        className={`border border-gray-300 rounded-md text-xl py-1 px-1`}
        placeholder="Enter username..."
      />
      <input
        type={"text"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className={`border border-gray-300 rounded-md text-xl py-1 my-3 px-1`}
        placeholder="Enter password..."
      />
      <div
        className={`flex flex-col h-[40px] w-[90px] justify-center items-center bg-blue-400 rounded-md cursor-pointer`}
        onClick={() => {
          loginUser();
        }}
      >
        <p className={`text-white font-bold`}>Login</p>
      </div>
    </div>
  );
}
