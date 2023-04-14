import React from "react";
import "./DesignFonts.css";
import { useSelector } from "react-redux";
import {
  Namecom,
  CompanyComp,
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

const Name = "Rachel Bigalow";
const Company = " Online marketer, JE marketing";
const Website = "www.je-marketing.com";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/6f9b05cc-c811-451a-bdd9-82623f3a5d2b/img.png";
const Template412 = () => {
  const { youtubeUrl, email } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);
  return (
    <div>
      <div style={{ margin: "auto", marginTop: "2%" }}>
        <table
          style={{ borderRight: "1px solid", padding: "0 15px", float: "left" }}
        >
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
        <table style={{ float: "left", marginLeft: "10px" }}>
          <tbody>
            <tr>
              <td>
                <span
                  style={{
                    fontFamily: 'Palatino, "Palatino Linotype", serif',
                    fontSize: "20.0px",
                    fontStyle: "normal",
                    lineHeight: "22px",
                    fontWeight: 400,
                    color: "#ff1919",
                    display: "inline",
                  }}
                >
                  <Namecom Name={Name} />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span
                  style={{
                    fontFamily: 'Palatino, "Palatino Linotype", serif',
                    fontSize: "14.0px",
                    fontStyle: "normal",
                    lineHeight: "16px",
                    fontWeight: 400,
                    color: "#535353",
                    display: "inline",
                  }}
                >
                  <CompanyComp Company={Company} />
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
                  marginTop: "7px",
                  float: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "Calibri, Helvetica, sans-serif",
                    fontSize: "15.0px",
                    fontStyle: "normal",
                    lineHeight: "17px",
                    fontWeight: 400,
                    color: "#303030",
                    display: "inline",
                    fontSize:
                      fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                  }}
                >
                  Phone.
                </span>
                <span
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
                  <PhoneComp />
                </span>
                <span
                  style={{
                    fontFamily: "Calibri, Helvetica, sans-serif",
                    fontSize: "15.0px",
                    fontStyle: "normal",
                    lineHeight: "17px",
                    fontWeight: 400,
                    color: "#303030",
                    display: "inline",
                    fontSize:
                      fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                  }}
                >
                  Mobile.
                </span>
                <span
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
                  <MobileComp />
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
                    fontSize: "15.0px",
                    fontStyle: "normal",
                    lineHeight: "17px",
                    fontWeight: 400,
                    color: "#303030",
                    display: "inline",
                    fontSize:
                      fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                  }}
                >
                  Web.
                </span>
                <span
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
                  <WebsiteComp Website={Website} />
                </span>
              </td>
            </tr>
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
                    fontSize: "15.0px",
                    fontStyle: "normal",
                    lineHeight: "17px",
                    fontWeight: 400,
                    color: "#303030",
                    display: "inline",
                    fontSize:
                      fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                  }}
                >
                  Address.
                </span>
                <span
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
                  <AddressComp Address={Address} />
                </span>
              </td>
            </tr>
            <tr>
              <td style={{ float: "left", marginTop: "8px" }}>
                {/* <ImgComp img={img} /> */}
              </td>
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
                    margin: "13px 0 0 0",
                    fontSize: "17px",
                    padding: "8px 18px 8px 18px",
                    borderRadius: "4px",
                    textDecoration: "none",
                  }}
                >
                  <VideoConfComp />
                </a>

                <CTAComp />
              </td>
              <td style={{ float: "left" }}>
                <p style={{ color: "#2b9a2b", fontSize: "18px" }}>
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

export default Template412;
