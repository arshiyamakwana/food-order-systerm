import axios from "axios";
import React from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:6001";

const axiosPublic = axios.create({
  baseURL: API_URL,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
