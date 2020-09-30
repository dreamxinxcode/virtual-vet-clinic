import { useEffect, useState } from "react";
import axios from "axios";

export const useAppData = () => {
  const [state, setState] = useState({
    user: {},
  });

  const getMyCredentials = () => {
    return axios.get("/users/me").then(res => {
      return res;
    });
  };

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({ ...state, appointments });
      })
      .then(() => axios.get("/api/days"))
      .then(res => setState(prev => ({ ...prev, days: res.data })));
  };

  // useEffect(() => {

  // })
};
