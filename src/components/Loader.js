import React from "react";
import Spinner from "./Spinner";

export default function Loader() {
  return (
    <div
      className={`flex flex-col h-screen w-screen justify-center items-center`}
    >
      <div
        className={`flex flex-col justify-center items-center w-1/5 h-[300px] border border-gray-600 rounded-md px-4 py-10`}
      >
        <Spinner />
        <p className={`text-xl font-medium mt-4`}>Loading...</p>
      </div>
    </div>
  );
}
