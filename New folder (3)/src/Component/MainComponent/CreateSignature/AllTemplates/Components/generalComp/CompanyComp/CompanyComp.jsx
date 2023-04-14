import React from "react";
import { useSelector } from "react-redux";

const CompanyComp = ({ Company }) => {
  const { company } = useSelector((state) => state.general);

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
        {company === "" ? Company : company}
      </span>
    </>
  );
};

export default CompanyComp;
