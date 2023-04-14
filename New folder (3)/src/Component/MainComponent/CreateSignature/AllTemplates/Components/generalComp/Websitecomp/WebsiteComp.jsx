import React from "react";
import { useSelector } from "react-redux";

const WebsiteComp = ({ Website }) => {
  const { website } = useSelector((state) => state.general);

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
        {website === "" ? Website : website}
      </span>
    </>
  );
};

export default WebsiteComp;
