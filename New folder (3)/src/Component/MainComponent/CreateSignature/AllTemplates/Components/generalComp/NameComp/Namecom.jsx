import React from "react";
import { useSelector } from "react-redux";

const Namecom = ({ Name }) => {
  const { name } = useSelector((state) => state.general);
  const { colors, fontsize, fontFamily, lineHeight } = useSelector(
    (state) => state.design
  );

  return (
    <>
      <span
        style={{
          color: colors,
          fontSize: fontsize === 1 ? "14px" : `${fontsize / 5 + 14}px`,
          fontFamily: fontFamily,
          textDecoration: "none",
          // lineHeight:lineHeight
        }}
      >
        {name === "" ? Name : name}
      </span>
    </>
  );
};

export default Namecom;
