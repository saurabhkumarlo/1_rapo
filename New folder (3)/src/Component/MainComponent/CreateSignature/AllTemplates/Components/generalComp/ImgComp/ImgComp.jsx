import React from "react";
import { useSelector } from "react-redux";

const ImgComp = ({ img }) => {
  const { general, design } = useSelector((state) => state);

  const { imgSize, imgShape, imageAnimationDesign, imageLink } = design;
  const { images } = general;

  return (
    <>
      <span>
        {imageLink ? (
          <a href={imageLink} target="_blank">
            <img
              src={images === "" ? null : images}
              className={` ${imageAnimationDesign}`}
              style={{
                // margin: 10,
                height: imgSize ? `${imgSize + 40}px` : "40px",
                width: imgSize ? `${imgSize + 40}px` : "40px",
                borderRadius: `${imgShape}% `,
                // transition: "ease-in-out .4s",
              }}
            />
          </a>
        ) : (
          <img
            src={images === "" ? null : images}
            className={` ${imageAnimationDesign}`}
            style={{
              // margin: 10,
              height: imgSize ? `${imgSize + 40}px` : "80px",
              width: imgSize ? `${imgSize + 40}px` : "80px",
              borderRadius: `${imgShape}% `,
              // transition: "ease-in-out .4s",
            }}
          />
        )}
      </span>
    </>
  );
};

export default ImgComp;
