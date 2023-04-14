import React, { useEffect, useState } from "react";
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

const Name = "Jason Erickson";
const Company = "Real Estate Agent";
const Website = "www.je-marketing.com";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/f098d823-6ffb-4884-8174-3d98360628ba/img.png";
const Template101 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);

  return (
    <div style={{ margin: "auto", "margin-top": "2%" }}>
      <table style={{ padding: "0 5px 0 0", float: "left" }}>
        <tbody>
          <tr>
            <td
              style={{
                "font-family": "Calibri, Helvetica, sans-serif",
                "font-size": "15.0px",
                "font-style": "normal",
                "line-height": "17px",
                "font-weight": "400",
                color: "#000000",
                display: "inline",
                "margin-bottom": "10px",
                float: "left",
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
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "9.0px",
                  fontStyle: "normal",
                  lineHeight: "10px",
                  fontWeight: "normal",
                  color: "#777777",
                  marginTop: "10px",
                  float: "left",
                }}
              >
                <SignatureComp />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ float: "left", "margin-left": "10px" }}>
        <tbody>
          <tr>
            <td>
              <span
                style={{
                  color: "#62ca3e",
                  "font-weight": "bold",
                }}
              >
                <Namecom Name={Name} />
              </span>
            </td>
          </tr>
          <tr>
            <td
              style={{
                "font-size": "12px",
                "letter-spacing": "0px",
                "font-weight": "bold",
                color: "#7d0d6f",
                "margin-bottom": "5px",
                float: "left",
              }}
            >
              {" "}
              <CompanyComp Company={Company} />
            </td>
          </tr>
        </tbody>
        <tbody
          style={{
            margin: "9px 0 0 0",
            float: "left",
            "border-top": "1px solid #62ca3e",
            "border-bottom": "1px solid #62ca3e",
            padding: "8px 0",
          }}
        >
          <tr>
            <td style={{ "line-height": "0%", "padding-bottom": "6px" }}>
              <table
                className="ws-tpl-phone"
                cellPadding={0}
                cellSpacing={0}
                style={{
                  "line-height": "14px",
                  "font-size": "12px",
                  "font-family": "Arial",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        "color-scheme": "light only",
                        "font-family": "Arial",
                        "font-weight": "bold",
                        "font-size": "12px",
                        color: "#45668E",
                      }}
                    >
                      {" "}
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
                        style={{
                          "vertical-align": "-2px",
                          "line-height": "1.2",
                        }}
                      />{" "}
                    </td>
                    <td
                      style={{
                        width: "5px",
                        "font-size": "1pt",
                        "line-height": "0",
                      }}
                      width={5}
                    >
                      &nbsp;
                    </td>
                    <td
                      style={{
                        "color-scheme": "light only",
                        "font-family": "Arial",
                        "font-size": "12px",
                      }}
                    >
                      {" "}
                      <a
                        href="tel:212-931-0000"
                        target="_blank"
                        style={{
                          "color-scheme": "light only",
                          "-webkit-text-decoration": "none",
                          "text-decoration": "none",
                          "font-size": "12px",
                          "font-family": "Arial",
                        }}
                      >
                        {" "}
                        <span
                          data-acs="phone"
                          style={{
                            "line-height": "1.2",
                            "color-scheme": "light only",
                            color: "#212121",
                            "font-family": "Arial",
                            "white-space": "nowrap",
                            "font-size": "12px",
                          }}
                        >
                          <PhoneComp />
                        </span>{" "}
                      </a>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td style={{ "line-height": "0%", "padding-bottom": "6px" }}>
              <table
                className="ws-tpl-website"
                cellPadding={0}
                cellSpacing={0}
                style={{
                  "line-height": "14px",
                  "font-size": "12px",
                  "font-family": "Arial",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        "color-scheme": "light only",
                        "font-family": "Arial",
                        "font-weight": "bold",
                        "font-size": "12px",
                        color: "#45668E",
                      }}
                    >
                      {" "}
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                        style={{
                          "vertical-align": "-2px",
                          "line-height": "1.2",
                        }}
                      />{" "}
                    </td>
                    <td
                      style={{
                        width: "5px",
                        "font-size": "1pt",
                        "line-height": "0",
                      }}
                      width={5}
                    >
                      &nbsp;
                    </td>
                    <td
                      style={{
                        "color-scheme": "light only",
                        "font-family": "Arial",
                        "font-size": "12px",
                      }}
                    >
                      {" "}
                      <a
                        href="http://www.je-marketing.com"
                        target="_blank"
                        style={{
                          "color-scheme": "light only",
                          "-webkit-text-decoration": "none",
                          "text-decoration": "none",
                          "font-size": "12px",
                          "font-family": "Arial",
                        }}
                      >
                        {" "}
                        <span
                          data-acs="website"
                          style={{
                            "line-height": "1.2",
                            "color-scheme": "light only",
                            color: "#212121",
                            "font-family": "Arial",
                            "white-space": "nowrap",
                            "font-size": "12px",
                          }}
                        >
                          {" "}
                          <WebsiteComp Website={Website} />
                        </span>{" "}
                      </a>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td style={{ "line-height": "0%", "padding-bottom": "6px" }}>
              <table
                className="ws-tpl-email"
                cellPadding={0}
                cellSpacing={0}
                style={{
                  "line-height": "14px",
                  "font-size": "12px",
                  "font-family": "Arial",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        "color-scheme": "light only",
                        "font-family": "Arial",
                        "font-weight": "bold",
                        "font-size": "12px",
                        color: "#45668E",
                      }}
                    >
                      {" "}
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                        style={{
                          "vertical-align": "-2px",
                          "line-height": "1.2",
                        }}
                      />{" "}
                    </td>
                    <td
                      style={{
                        width: "5px",
                        "font-size": "1pt",
                        "line-height": "0",
                      }}
                      width={5}
                    >
                      &nbsp;
                    </td>
                    <td
                      style={{
                        "color-scheme": "light only",
                        "font-family": "Arial",
                        "font-size": "12px",
                      }}
                    >
                      {" "}
                      <a
                        href="mailto:jason@je-marketing.com "
                        target="_blank"
                        style={{
                          "color-scheme": "light only",
                          "-webkit-text-decoration": "none",
                          "text-decoration": "none",
                          "font-size": "12px",
                          "font-family": "Arial",
                        }}
                      >
                        {" "}
                        <span
                          data-acs="email"
                          style={{
                            "line-height": "1.2",
                            "color-scheme": "light only",
                            color: "#212121",
                            "font-family": "Arial",
                            "white-space": "nowrap",
                            "font-size": "12px",
                          }}
                        >
                          {" "}
                          <EmailComp />
                        </span>{" "}
                      </a>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td style={{ "line-height": "0%", "padding-bottom": "6px" }}>
              <table
                className="ws-tpl-address"
                cellPadding={0}
                cellSpacing={0}
                style={{
                  "line-height": "14px",
                  "font-size": "12px",
                  "font-family": "Arial",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        "color-scheme": "light only",
                        "font-family": "Arial",
                        "font-weight": "bold",
                        "font-size": "12px",
                        color: "#45668E",
                      }}
                    >
                      {" "}
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                        style={{
                          "vertical-align": "-2px",
                          "line-height": "1.2",
                        }}
                      />{" "}
                    </td>
                    <td
                      style={{
                        width: "5px",
                        "font-size": "1pt",
                        "line-height": "0",
                      }}
                      width={5}
                    >
                      &nbsp;
                    </td>
                    <td
                      style={{
                        "color-scheme": "light only",
                        "font-family": "Arial",
                        "font-size": "12px",
                      }}
                    >
                      {" "}
                      <a
                        href="https://maps.google.com/?q=1937 Fieldcrest Road, NY 10011"
                        target="_blank"
                        style={{
                          "color-scheme": "light only",
                          "-webkit-text-decoration": "none",
                          "text-decoration": "none",
                          "font-size": "12px",
                          "font-family": "Arial",
                        }}
                      >
                        {" "}
                        <span
                          data-acs="address"
                          style={{
                            "line-height": "1.2",
                            "color-scheme": "light only",
                            color: "#212121",
                            "font-family": "Arial",
                            "white-space": "nowrap",
                            "font-size": "12px",
                          }}
                        >
                          {" "}
                          <AddressComp Address={Address} />
                        </span>{" "}
                      </a>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ float: "left", "margin-left": "48px" }}>
        <tbody>
          <div
            style={{
              marginTop: "10px",
            }}
          >
            {" "}
            <SocialComp />
          </div>
        </tbody>
      </table>
      <table style={{ float: "left", width: "100%", "margin-top": "10px" }}>
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
                  "font-size": "16px",
                  margin: "5px 0 0 0",
                  float: "left",
                }}
              >
                <QuoteComp />
              </span>
              <p
                style={{
                  "FONT-SIZE": "15PX",
                  float: "left",
                  MARGIN: "10px 0 0 0",
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
                  "font-size": "17px",
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
              <p style={{ color: "#2b9a2b", "font-size": "18px" }}>
                <GreenMsgComp />
              </p>
              <BannerComp />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Template101;
