import React, { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { useDispatch } from "react-redux";
import { getBannerImg } from "redux/CounterSlice";
import UserModal from "../../General/UserModal";

const PredesignedBanner = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const filePreview = URL.createObjectURL(e.target.files[0]);
    dispatch(getBannerImg(filePreview));
    e.target.value = null;
    return false;
  };

  return (
    <>
      <article>
        <hr />
        <div className="grid gap-2 items-center justify-items-start mt-5  ml-4">
          {/* <h1 className="text-2xl font-semibold">Upload my banner</h1> */}
          <h1 className="text-lg font-semibold">
            Upload your banner (JPG, PNG,GIF)
          </h1>
          <h1 className="text-md font-semibold text-gray-400">
            For best image quality, we recommend to use up to 520px width
          </h1>
          <section className="grid gap-3 mt-4 justify-items-center mb-5 border-4 border-dotted bg-gray-100 px-5 py-4 ">
            <h1 className="text-lg font-semibold">
              Drag & Drop your banner here
            </h1>
            <span className="text-sm text-gray-400">Or</span>
            <button className="font-bold image-upload  py-2 px-8 rounded inline-flex gap-3 text-white bg-blue-400">
              <label
                for="file-input"
                className="cursor-pointer flex items-center gap-4"
              >
                <MdCloudUpload fontSize="30" />
                <span className="text-xl">Choose file to upload</span>
                <input
                  id="file-input"
                  type="file"
                  className="hidden"
                  placeholder="upload-images"
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </button>
          </section>
        </div>
      </article>
    </>
  );
};

export default PredesignedBanner;
