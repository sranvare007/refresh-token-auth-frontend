import React, { useEffect, useState } from "react";
import { globalConstants } from "../constants";
import { axiosInstance } from "../network/axiosInstance";

export default function Profile() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get("/userInfo");
      if (
        response.status === 200 &&
        response.data.status === globalConstants.status.SUCCESS
      ) {
        setUserId(response.data.userId);
      }
    })();
  }, []);

  return <div>Profile: {userId}</div>;
}
