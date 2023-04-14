import React from "react";
import { useSelector } from "react-redux";

const Disclamer = () => {
  const { disclaimer } = useSelector((state) => state.counter);
  return <>{disclaimer}</>;
};

export default Disclamer;
