import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBannerImg } from "../../../../redux/CounterSlice";
import axios from "axios";
import { baseUrl } from "../../../../services/BaseUrl";
import { getBanner } from "redux/bannerSlice";
import { useSelector } from "react-redux";
import ReactImageAppear from "react-image-appear";
import Loading from "Pages/Login/Loading";

const PredesignedBanner = () => {
  const dispatch = useDispatch();
  const { banner } = useSelector((state) => state.banner);

  useEffect(() => {
    try {
      axios.get(baseUrl + "/get_banners_list").then((res) => {
        console.log(res.data);
        dispatch(getBanner(res.data.data));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <article>
        <hr />
        <div className="grid gap-2 w-full items-center justify-items-start mt-5 ">
          {/* <h1 className="text-2xl font-semibold">PredesignedBanners</h1> */}
          <h1 className="2xl:text-lg ml-6 text-md font-semibold">
            Choose your banner
          </h1>
          <section className="grid w-11/12 mx-auto gap-3 mt-4 justify-items-center mb-5">
            {banner.length > 0 ? (
              banner.map((v, i) => (
                <ReactImageAppear
                  key={i}
                  src={v.image}
                  onClick={() => dispatch(getBannerImg(v.image))}
                  alt="banner"
                  className="bg-cover w-80 h-16"
                />
              ))
            ) : (
              <div className="w-16 mx-auto ">
                <Loading type="ThreeDots" color="#777" width={60} height={40} />
              </div>
            )}
          </section>
        </div>
      </article>
    </>
  );
};

export default PredesignedBanner;
