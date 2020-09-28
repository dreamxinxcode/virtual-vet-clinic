import { useState } from "react";
import axios from "axios";

export const useAppData = () => {
  const [state, setState] = useState({
    user: {},
  });

  const getMyCredentials = () => {
    return axios.get("/users/me").then((res) => {
      return res;
    });
  };
};
