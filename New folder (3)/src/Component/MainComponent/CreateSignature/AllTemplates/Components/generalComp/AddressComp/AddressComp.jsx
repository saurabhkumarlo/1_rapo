import React from "react";
import { useSelector } from "react-redux";

const AddressComp = ({ Address }) => {
  const { address } = useSelector((state) => state.general);
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
        {address === "" ? Address : address}
      </span>
    </>
  );
};

export default AddressComp;
