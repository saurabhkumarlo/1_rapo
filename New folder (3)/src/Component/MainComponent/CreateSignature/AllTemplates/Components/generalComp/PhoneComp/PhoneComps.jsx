import React from "react";
import { useSelector } from "react-redux";

const PhoneComps = () => {
  const { phonenumber } = useSelector((state) => state.general);

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
          // lineHeight:lineHeight
        }}
      >
        {phonenumber === "" ? null : phonenumber}
      </span>
    </>
  );
};

export default PhoneComps;
