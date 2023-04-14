import React from "react";
import { useSelector } from "react-redux";

const MobileComp = () => {
  const { mobilenumber } = useSelector((state) => state.general);
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
          lineHeight: lineHeight,
        }}
      >
        {mobilenumber === "" ? null : mobilenumber}
      </span>
    </>
  );
};

export default MobileComp;
