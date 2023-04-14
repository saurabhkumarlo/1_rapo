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

const Name = "Tanya Bisskutt";
const Company = "   Real Estate Agent";
const Website = "www.je-marketing.com";
const Address = "1 Example St, Town WA 6301";
const img =
  "https://y5t6h9a6.stackpathcdn.com/354b7a0d-1c58-4eea-bc71-49fc5b6e0a75/img.png";

const Template250 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);

  return (
    <>
      <div style={{ margin: "auto", marginTop: "2%" }}>
        <table style={{ float: "left", marginLeft: "10px" }}>
          <tbody>
            <tr>
              <td
                style={{
                  fontFamily: "Calibri, Helvetica, sans-serif",
                  fontSize: "17.0px",
                  fontStyle: "normal",
                  lineHeight: "19px",
                  fontWeight: 700,
                  color: "#1d76c8",
                  display: "inline",
                }}
              >
                <Namecom Name={Name} />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontFamily: "Calibri, Helvetica, sans-serif",
                  fontSize: "15.0px",
                  fontStyle: "normal",
                  lineHeight: "17px",
                  fontWeight: 700,
                  color: "#000000",
                  display: "inline",
                }}
              >
                <CompanyComp Company={Company} />
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
                    color: "#341e25",
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
                    fontSize: "15.0px",
                    fontStyle: "normal",
                    lineHeight: "17px",
                    fontWeight: 400,
                    color: "#000",
                    display: "inline",
                  }}
                >
                  <PhoneComp />
                  &nbsp;
                </span>
                <span
                  style={{
                    fontFamily: "Calibri, Helvetica, sans-serif",
                    fontSize: "15.0px",
                    fontStyle: "normal",
                    lineHeight: "17px",
                    fontWeight: 400,
                    color: "#341e25",
                    display: "inline",
                    fontSize:
                      fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                  }}
                >
                  M.
                </span>
                <span
                  style={{
                    fontFamily: "Calibri, Helvetica, sans-serif",
                    fontSize: "15.0px",
                    fontStyle: "normal",
                    lineHeight: "17px",
                    fontWeight: 400,
                    color: "#000",
                    display: "inline",
                  }}
                >
                  <MobileComp />
                  &nbsp;
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
                    color: "#341e25",
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
                    color: "#341e25",
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
          <tbody>
            <SocialComp />
          </tbody>
        </table>
        <table
          style={{
            borderLeft: "1px solid",
            marginLeft: "12px",
            padding: "0 0 0  15px",
            float: "left",
          }}
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
                <div
                  style={{
                    marginLeft: "11px",
                  }}
                >
                  <SignoffComp />
                </div>
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
                  href
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "9.0px",
                    fontStyle: "normal",
                    lineHeight: "10px",
                    fontWeight: "normal",
                    color: "#777777",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "11px",
                    }}
                  >
                    <SignatureComp />
                  </div>
                </a>
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
    </>
  );
};

export default Template250;
