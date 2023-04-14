import React from "react";
import { useSelector } from "react-redux";

const SignoffComp = ({ src }) => {
  const { signofftext, signofffontStyle, signoffColors, signofffontSize } =
    useSelector((state) => state.counter);
  return (
    <div>
      <span
        style={{
          fontFamily: signofffontStyle,
          color: signoffColors,
          fontSize: signofffontSize,
          paddingRight: "10px",
        }}
      >
        {signofftext}
      </span>
    </div>
  );
};

export default SignoffComp;
