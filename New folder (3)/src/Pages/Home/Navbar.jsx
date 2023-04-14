import React from "react";
import { useState } from "react";
import "./Tabs.css";
import MySignature from "../../Component/MainComponent/My Signature/index";
import CreateSignature from "../../Component/MainComponent/CreateSignature/index";
import ProfileMenu from "./ProfileMenu";
import { FaUserAlt } from "react-icons/fa";
import { FaSignature } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { FaFileSignature } from "react-icons/fa";
import User from "../../Component/MainComponent/User/Index";
import Logo from "../../logo.png";
import { useSelector } from "react-redux";
import { getToggleIndex } from "redux/toggleSlice";
import { useDispatch } from "react-redux";
import Tutorials from "./Tutorials/Tutorials";
import Help from "./Help/Help";

const name = localStorage.getItem("name");
const account = name;

export default function Navbar() {
  const { toggleIndex } = useSelector((state) => state.toggle);
  const [showMenu, setShowMenu] = useState(false);

  // const [toggleIndex, setToggleState] = useState(toggleIndex);

  const dispatch = useDispatch();

  const toggleTab = (index) => {
    // console.log("index", index);
    dispatch(getToggleIndex(index));
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className=" overflow-hidden">
        <section className="bg-white px-6 py-1 flex items-center">
          <div className="flex-1 items-center">
            {/* <h1 className="font-bold text-5xl">Signatize</h1> */}
            <img
              className=" animate__animated animate__backInRight animate__faster w-16 h-10"
              src={Logo}
            />
          </div>
          {/* USER PROFILE */}
          <div
            className="flex gap-3 items-center cursor-pointer"
            onClick={handleShowMenu}
          >
            <div className="text-xs 2xl:text-sm font-bold">
              {" "}
              Welcome, {account}
            </div>
            <FaUserAlt
              fontSize="16"
              className="backdrop-opacity-100 text-gray-400"
            />
            <div>
              <ProfileMenu showMenu={showMenu} />
            </div>
          </div>
        </section>

        <section className="bg-black flex flex-row gap-1 ">
          <button
            className={`bg-secondary hover:bg-secondary  text-white font-semibold py-5 px-3 flex flex-col lg:flex-row items-center justify-center ${
              toggleIndex === 1 ? " tabs active-tabs " : "tabs"
            }`}
            onClick={() => toggleTab(1)}
          >
            <FaSignature fontSize="20" />
            <span className="text-xs md:text-md lg:text-xl ml-1">
              My Signatures
            </span>
          </button>
          <button
            className={`bg-secondary hover:bg-secondary  text-white font-semibold py-5 px-7 flex flex-col lg:flex-row items-center justify-center ${
              toggleIndex === 2 ? "tabs active-tabs" : "tabs"
            }`}
            onClick={() => toggleTab(2)}
          >
            <FaFileSignature fontSize="20" />
            <div className="text-xs md:text-md lg:text-xl ml-1">
              Create Signature
            </div>
          </button>
          <button
            className={`bg-secondary hover:bg-secondary  text-white font-semibold py-5 px-7 flex flex-col lg:flex-row  items-center justify-center ${
              toggleIndex === 3 ? "tabs active-tabs" : "tabs"
            }`}
            onClick={() => toggleTab(3)}
          >
            <FaUser fontSize="18" />
            <span className="text-xs md:text-md lg:text-xl ml-1">Users</span>
          </button>
          <button
            className={`bg-secondary hover:bg-secondary  text-white font-semibold py-5 px-7 flex flex-col lg:flex-row items-center justify-center ${
              toggleIndex === 4 ? "tabs active-tabs" : "tabs"
            }`}
            onClick={() => toggleTab(4)}
          >
            <MdVideoLibrary fontSize="20" />
            <span className="text-xs md:text-md lg:text-xl ml-1">
              Tutorials
            </span>
          </button>
          <button
            className={`bg-secondary hover:bg-secondary  text-white  font-semibold py-5 px-7 flex flex-col lg:flex-row  items-center justify-center ${
              toggleIndex === 5 ? "tabs active-tabs" : "tabs"
            }`}
            onClick={() => toggleTab(5)}
          >
            <IoMdHelpCircle fontSize="20" />
            <span className="text-xs md:text-md lg:text-xl ml-1">Help</span>
          </button>
        </section>
        <div className="w-full h-1 relative bg-primary"></div>

        <section>
          <div className="">
            <div
              className={
                toggleIndex === 1 ? "content  active-content" : "content"
              }
            >
              <div>
                <MySignature toggleTab={toggleTab} />
              </div>
            </div>
            <div
              className={
                toggleIndex === 2 ? "content  active-content" : "content"
              }
            >
              <div>
                <CreateSignature />
              </div>
            </div>

            <div
              className={
                toggleIndex === 3 ? "content  active-content" : "content"
              }
            >
              <div>
                <User />
              </div>
            </div>
            <div
              className={
                toggleIndex === 4 ? "content  active-content" : "content"
              }
            >
              <div>
                <Tutorials />
              </div>
            </div>
            <div
              className={
                toggleIndex === 5 ? "content  active-content" : "content"
              }
            >
              <div>
                <Help />
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}
