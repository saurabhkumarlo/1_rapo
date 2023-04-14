import React from "react";
import { useSelector } from "react-redux";

const QuoteComp = () => {
  const { quoteTitle } = useSelector((state) => state.counter);
  return (
    <>{quoteTitle === "" ? "William Shakespeare quote......" : quoteTitle}</>
  );
};

export default QuoteComp;
