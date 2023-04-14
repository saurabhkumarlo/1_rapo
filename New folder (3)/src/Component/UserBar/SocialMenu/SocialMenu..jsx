import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  getFacebooklinks,
  getYoutubelink,
  getLinkedInLink,
  getTwitterlinks,
  getStackoverflowlinks,
  getInstalinks,
  getCustemlink,
} from "redux/socialSlice";
import SingleTextField from "./SingleTextField";
// import { getSocialImages } from "redux/CounterSlice";
import { getSocialImages } from "redux/socialSlice";
import uploadIcon from "../../image/upload.png";
import facebook from "./socialicons/facebook.jpg";
import insta from "./socialicons/insta.jpg";
import linkedins from "./socialicons/linkedIn.jpg";
import stackoverflow from "./socialicons/stackoverflow.jpg";
import twitter from "./socialicons/twitter.jpg";
import youtube from "./socialicons/youtube.jpg";
import axios from "axios";
import "animate.css";

const SocialMenu = () => {
  const [inputFields, setInputFields] = useState([]);
  const [customlinkArray, setCustomlinkArray] = useState([]);
  const dispatch = useDispatch();

  const {
    socialImages,
    facebooklinks,
    linkedInLinklinks,
    twitterlinks,
    customLink,
  } = useSelector((state) => state.social);

  const handleChanges = (e) => {
    const data = new FormData();
    data.append("user_id", localStorage.getItem("id"));
    data.append("image", e.target.files[0]);
    axios
      .post("https://app.signatize.io/api/image_upload", data)
      .then((res) => {
        console.log(res);
        dispatch(getSocialImages(res.data.data.image));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddFields = (i) => {
    console.log(i);
    setInputFields([
      ...inputFields,
      {
        id: 8,
        label: "example.com",
        customLink: (e) => dispatch(getCustemlink(e.target.value)),
        image: socialImages,
        onChange: handleChanges,
        onClick: handleChanges,
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
    dispatch(getSocialImages(uploadIcon));
    dispatch(getCustemlink(null));
  };

  return (
    <div
      className="overflow-x-hidden overflow-y-auto pb-5"
      style={{ height: "81vh" }}
    >
      <article className="animate__animated animate__fadeInRight animate__faster">
        <div className="flex px-5">
          <h1 className="font-bold flex-1 mt-5"> SOCIAL PROFILES</h1>
        </div>

        {/* All INPUTS  */}
        <div className="ml-5 w-11/12 mx-auto">
          <ul className="grid">
            <div className="inline-flex gap-3 items-center ">
              <div className="w-8 mt-5">
                <img src={facebook} className="rounded-full" />
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="facebook"
                  style={{ width: "330px" }}
                  inputProps={{
                    maxlength: 18,
                  }}
                  value={facebooklinks}
                  onChange={(e) => dispatch(getFacebooklinks(e.target.value))}
                />
              </div>
            </div>

            <div className="inline-flex gap-3 items-center">
              <div className="w-8 mt-5">
                <img src={twitter} className="rounded-full" />
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="twitter"
                  style={{ width: "330px" }}
                  value={twitterlinks}
                  inputProps={{
                    maxlength: 18,
                  }}
                  onChange={(e) => dispatch(getTwitterlinks(e.target.value))}
                />
              </div>
            </div>
            <div className="inline-flex gap-3 items-center">
              <div className="w-8 mt-5">
                <img src={linkedins} className="rounded-full " />
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="linkedin"
                  style={{ width: "330px" }}
                  value={linkedInLinklinks}
                  inputProps={{
                    maxlength: 18,
                  }}
                  onChange={(e) => dispatch(getLinkedInLink(e.target.value))}
                />
              </div>
            </div>
            {inputFields.map((v, i) => (
              <div>
                <SingleTextField
                  label={v.label}
                  Image={v.image}
                  customLink={v.customLink}
                  onChange={handleChanges}
                  onClick={v.onClick}
                  handleRemoveFields={handleRemoveFields}
                  i={i}
                  v={v}
                />
              </div>
            ))}
          </ul>
        </div>
        <div className="w-7/12 mx-auto">
          <button
            onClick={(i) => handleAddFields(i)}
            className="font-bold py-2 px-8 rounded inline-flex gap-3 text-black hover:text-white bg-tabs hover:bg-blue-400  border-2 border-dotted border-yellow mt-2"
          >
            <span className="text-lg">Upload your own icon</span>
          </button>
        </div>
      </article>
    </div>
  );
};

export default SocialMenu;
