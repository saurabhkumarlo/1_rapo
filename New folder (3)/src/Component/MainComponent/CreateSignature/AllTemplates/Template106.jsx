import React from "react";

import { useSelector } from "react-redux";
import {
  Namecom,
  PhoneComp,
  MobileComp,
  AddressComp,
  WebsiteComp,
  EmailComp,
  SocialComp,
  VideoComp,
  ConfrenceBtn,
  WedgitsSocialComp,
  QuoteComp,
  Disclamer,
  VideoConfComp,
  CTAComp,
  GreenMsgComp,
  BannerComp,
  ImgComp,
  SignoffComp,
  SignatureComp,
} from ".";

const Name = "Jason Erickson";
const Company = " Online marketer, JE marketing";
const Website = "www.je-marketing.com";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/a9c7abae-71bc-4b37-8e0c-b3fd87c29962/img.png";
const Template106 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize, colors } = useSelector((state) => state.design);
  return (
    <div>
      <div style={{ margin: "auto", marginTop: "2%" }}>
        <table style={{ padding: "0 15px", float: "left" }}>
          <tbody>
            <tr>
              <td
                style={{
                  fontFamily: "Calibri, Helvetica, sans-serif",
                  fontSize: "15.0px",
                  fontStyle: "normal",
                  lineHeight: "17px",
                  fontWeight: 400,
                  color: "#000000",
                  display: "inline",
                }}
              >
                <SignoffComp />
              </td>
            </tr>
            <tr>
              <td>
                <ImgComp img={img} />
              </td>
            </tr>
          </tbody>
          <tbody>
            <div
              style={{
                marginTop: "10px",
              }}
            >
              {" "}
              <SocialComp />
            </div>
            <tr>
              <td
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "9.0px",
                  fontStyle: "normal",
                  lineHeight: "10px",
                  fontWeight: "normal",
                  color: "#777777",
                }}
              >
                <a
                  href=""
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "9.0px",
                    fontStyle: "normal",
                    lineHeight: "10px",
                    fontWeight: "normal",
                    color: "#777777",
                  }}
                >
                  <SignatureComp />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{ float: "left", marginLeft: "10px", marginTop: "70px" }}>
          <tbody>
            <tr>
              <td>
                <span
                  style={{
                    fontFamily: "Calibri, Helvetica, sans-serif",
                    fontSize: "30.0px",
                    fontStyle: "normal",
                    lineHeight: "32px",
                    fontWeight: 700,
                    color: "#000000",
                    display: "inline",
                    borderBottom: "4px solid #ff0000",
                    padding: "0 0 6px 0",
                    float: "left",
                    marginBottom: "8px",
                  }}
                >
                  <Namecom Name={Name} />
                </span>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td
                style={{
                  borderCollapse: "collapse",
                  fontFamily: "Calibri, Helvetica, sans-serif",
                  fontSize: "15.0px",
                  fontStyle: "normal",
                  lineHeight: "17px",
                  fontWeight: 400,
                  padding: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "Calibri, Helvetica, sans-serif",
                    fontSize: "18.0px",
                    fontStyle: "normal",
                    lineHeight: "20px",
                    fontWeight: 700,
                    color: "#ff0000",
                    display: "inline",
                    fontSize:
                      fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                  }}
                >
                  P.
                </span>
                <span
                  style={{
                    fontFamily: "Calibri, Helvetica, sans-serif",
                    fontSize: "18.0px",
                    fontStyle: "normal",
                    lineHeight: "20px",
                    fontWeight: 700,
                    color: "#000000",
                    display: "inline",
                  }}
                >
                  <PhoneComp />
                </span>
                <span
                  style={{
                    fontFamily: "Calibri, Helvetica, sans-serif",
                    fontSize: "18.0px",
                    fontStyle: "normal",
                    lineHeight: "20px",
                    fontWeight: 700,
                    color: "#ff0000",
                    display: "inline",
                    fontSize:
                      fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                  }}
                >
                  W.
                </span>
                <span
                  style={{
                    fontFamily: "Calibri, Helvetica, sans-serif",
                    fontSize: "18.0px",
                    fontStyle: "normal",
                    lineHeight: "20px",
                    fontWeight: 700,
                    color: "#000000",
                    display: "inline",
                  }}
                >
                  <WebsiteComp Website={Website} />
                </span>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td
                style={{
                  borderCollapse: "collapse",
                  fontFamily: "Calibri, Helvetica, sans-serif",
                  fontSize: "15.0px",
                  fontStyle: "normal",
                  lineHeight: "17px",
                  fontWeight: 400,
                  padding: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "Calibri, Helvetica, sans-serif",
                    fontSize: "18.0px",
                    fontStyle: "normal",
                    lineHeight: "20px",
                    fontWeight: 700,
                    color: "#ff0000",
                    display: "inline",
                    fontSize:
                      fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                  }}
                >
                  A.
                </span>
                <span
                  style={{
                    fontFamily: "Calibri, Helvetica, sans-serif",
                    fontSize: "18.0px",
                    fontStyle: "normal",
                    lineHeight: "20px",
                    fontWeight: 700,
                    color: "#000000",
                    display: "inline",
                  }}
                >
                  <AddressComp Address={Address} />
                </span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderCollapse: "collapse",
                  paddingBottom: "3px",
                  height: "3px",
                }}
              ></td>
            </tr>
            <tr>
              <td
                style={{
                  borderCollapse: "collapse",
                  paddingBottom: "4px",
                  height: "4px",
                }}
              />
            </tr>
          </tbody>
        </table>
        <table style={{ float: "left", width: "100%", marginTop: "10px" }}>
          <tbody>
            <tr>
              <td style={{ float: "left" }}>
                <VideoComp />

                <div style={{ float: youtubeUrl ? "right" : "left" }}>
                  <div className="grid grid-cols-2 gap-1">
                    <WedgitsSocialComp />
                  </div>
                </div>
              </td>
              <td style={{ float: "left" }}>
                <span
                  style={{
                    fontSize: "16px",
                    margin: "5px 0 0 0",
                    float: "left",
                  }}
                >
                  <QuoteComp />
                </span>
                <p
                  style={{
                    fontSize: "15PX",
                    float: "left",
                    margin: "10px 0 0 0",
                  }}
                >
                  <Disclamer />
                </p>
                <a
                  href="#"
                  style={{
                    float: "left",
                    color: "#000",
                    margin: "20px 0 0 0",
                    fontSize: "17px",
                    borderRadius: "4px",
                    textDecoration: "none",
                  }}
                >
                  <VideoConfComp />
                </a>

                <CTAComp />
              </td>
              <td style={{ float: "left" }}>
                <p
                  style={{
                    color: "#2b9a2b",
                    fontSize: "18px",
                    marginTop: "10px",
                  }}
                >
                  <GreenMsgComp />
                </p>
                <BannerComp />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Template106;
