import { TextField } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import uploadIcon from "../../image/upload.png";
import DeleteIcon from "@material-ui/icons/Delete";

const SingleTextField = ({
  onChange,
  customLink,
  label,
  Image,
  onClick,
  handleRemoveFields,
  i,
  v,
}) => {
  const dispatch = useDispatch();
  // const socialImages = useSelector((state) => state.counter.socialImages);
  const socialImages = useSelector((state) => state.social.socialImages);
  return (
    <div className="inline-flex gap-3 items-center animate__animated animate__headShake">
      <div className="w-8 h-8 mt-5 image-upload">
        <label for="file-input">
          <img
            src={socialImages === "" ? uploadIcon : socialImages}
            className="rounded-full"
          />
        </label>
        <input id="file-input" type="file" multiple onChange={onChange} />
      </div>
      <TextField
        id="standard-basic"
        label={label}
        style={{ width: "332px" }}
        inputProps={{
          maxlength: 118,
        }}
        onChange={customLink}
      />

      <div className="bg-gray-500 rounded-full p-2 cursor-pointer mt-4">
        <DeleteIcon class="w-3 h-3" onClick={() => handleRemoveFields()} />
      </div>
    </div>
  );
};

export default SingleTextField;
