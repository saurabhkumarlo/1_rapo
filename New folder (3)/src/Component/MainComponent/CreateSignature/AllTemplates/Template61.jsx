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
  "https://y5t6h9a6.stackpathcdn.com/00d44c71-a188-4285-9f04-62dbe1520309/img.png";

const Template61 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);

  return (
    <div style={{ margin: "auto", marginTop: "2%" }}>
      <table style={{ float: "left", marginLeft: "10px" }}>
        <tbody>
          <tr>
            <td
              style={{
                textAlign: "right",
                paddingRight: "6px",
                lineHeight: "1.2",
              }}
              align="right"
            >
              {" "}
              <span
                className="ws-tpl-name"
                style={{
                  fontFamily: "Arial",
                  fontSize: "17px",
                  color: "#45668E",
                  textTransform: "initial",
                  fontWeight: "bold",
                }}
                data-acs="name"
              >
                {" "}
                <Namecom Name={Name} />
              </span>
              <br />{" "}
              <span
                className="ws-tpl-title"
                style={{
                  // fontSize: "12px",
                  letterSpacing: "0px",
                  fontFamily: "Arial",
                  textTransform: "initial",
                  fontWeight: "bold",
                  color: "#333",
                }}
                data-acs="title"
              >
                <CompanyComp Company={Company} />
              </span>{" "}
              <span
                className="ws-tpl-company"
                style={{
                  // fontSize: "12px",
                  letterSpacing: "0px",
                  fontFamily: "Arial",
                  textTransform: "initial",
                  fontWeight: "bold",
                  color: "#333",
                }}
                data-acs="company"
              ></span>{" "}
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: "10px", lineHeight: "0%" }}>
              <table
                className="ws-tpl-social"
                cellPadding={0}
                cellSpacing={0}
                style={{ width: "100%!important", lineHeight: "1.2" }}
                width="100%"
              >
                <tbody>
                  <SocialComp />
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ padding: "0 15px", float: "left" }}>
        <tbody>
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
      <table cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr>
            <td style={{ lineHeight: "0%", paddingBottom: "6px" }}>
              <table
                className="ws-tpl-phone"
                cellPadding={0}
                cellSpacing={0}
                style={{
                  lineHeight: "14px",
                  fontSize: "12px",
                  fontFamily: "Arial",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        colorScheme: "light only",
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        fontSize: "12px",
                        // color: "#45668E",
                      }}
                    >
                      {" "}
                      <span
                        style={{
                          lineHeight: "1.2",
                          fontSize:
                            fontsize === 1 ? "12px" : `${fontsize / 5 + 12}px`,
                        }}
                      >
                        Phone
                      </span>{" "}
                    </td>
                    <td
                      style={{ width: "5px", fontSize: "1pt", lineHeight: 0 }}
                      width={5}
                    >
                      &nbsp;
                    </td>
                    <td
                      style={{
                        colorScheme: "light only",
                        fontFamily: "Arial",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      <a
                        href="tel:212-931-0000"
                        target="_blank"
                        style={{
                          colorScheme: "light only",
                          textDecoration: "none",
                          fontSize: "12px",
                          fontFamily: "Arial",
                        }}
                      >
                        {" "}
                        <span
                          data-acs="phone"
                          style={{
                            lineHeight: "1.2",
                            colorScheme: "light only",
                            // color: "#212121",
                            fontFamily: "Arial",
                            whiteSpace: "nowrap",
                            fontSize: "12px",
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
            <td style={{ lineHeight: "0%", paddingBottom: "6px" }}>
              <table
                className="ws-tpl-website"
                cellPadding={0}
                cellSpacing={0}
                style={{
                  lineHeight: "14px",
                  fontSize: "12px",
                  fontFamily: "Arial",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        colorScheme: "light only",
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "#45668E",
                      }}
                    >
                      {" "}
                      <span
                        style={{
                          lineHeight: "1.2",
                          fontSize:
                            fontsize === 1 ? "12px" : `${fontsize / 5 + 12}px`,
                        }}
                      >
                        Website
                      </span>{" "}
                    </td>
                    <td
                      style={{ width: "5px", fontSize: "1pt", lineHeight: 0 }}
                      width={5}
                    >
                      &nbsp;
                    </td>
                    <td
                      style={{
                        colorScheme: "light only",
                        fontFamily: "Arial",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      <a
                        style={{
                          colorScheme: "light only",
                          textDecoration: "none",
                          fontSize: "12px",
                          fontFamily: "Arial",
                        }}
                      >
                        <span
                          data-acs="website"
                          style={{
                            lineHeight: "1.2",
                            colorScheme: "light only",
                            color: "#212121",
                            fontFamily: "Arial",
                            whiteSpace: "nowrap",
                          }}
                        >
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
            <td style={{ lineHeight: "0%", paddingBottom: "6px" }}>
              <table
                className="ws-tpl-email"
                cellPadding={0}
                cellSpacing={0}
                style={{
                  lineHeight: "14px",
                  fontSize: "12px",
                  fontFamily: "Arial",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        colorScheme: "light only",
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "#45668E",
                      }}
                    >
                      {" "}
                      <span
                        style={{
                          lineHeight: "1.2",
                          fontSize:
                            fontsize === 1 ? "12px" : `${fontsize / 5 + 12}px`,
                        }}
                      >
                        Email
                      </span>{" "}
                    </td>
                    <td
                      style={{ width: "5px", fontSize: "1pt", lineHeight: 0 }}
                      width={5}
                    >
                      &nbsp;
                    </td>
                    <td
                      style={{
                        colorScheme: "light only",
                        fontFamily: "Arial",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      <a
                        href=""
                        target="_blank"
                        style={{
                          colorScheme: "light only",
                          textDecoration: "none",
                          fontSize: "12px",
                          fontFamily: "Arial",
                        }}
                      >
                        {" "}
                        <span
                          data-acs="email"
                          style={{
                            lineHeight: "1.2",
                            colorScheme: "light only",
                            // color: "#212121",
                            fontFamily: "Arial",
                            whiteSpace: "nowrap",
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
            <td style={{ lineHeight: "0%", paddingBottom: "6px" }}>
              <table
                className="ws-tpl-address"
                cellPadding={0}
                cellSpacing={0}
                style={{
                  lineHeight: "14px",
                  fontSize: "12px",
                  fontFamily: "Arial",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        colorScheme: "light only",
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "#45668E",
                      }}
                    >
                      {" "}
                      <span
                        style={{
                          lineHeight: "1.2",
                          fontSize:
                            fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                        }}
                      >
                        Address
                      </span>{" "}
                    </td>
                    <td
                      style={{ width: "5px", fontSize: "1pt", lineHeight: 0 }}
                      width={5}
                    >
                      &nbsp;
                    </td>
                    <td
                      style={{
                        colorScheme: "light only",
                        fontFamily: "Arial",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      <a
                        style={{
                          colorScheme: "light only",
                          textDecoration: "none",
                          fontSize: "12px",
                          fontFamily: "Arial",
                        }}
                      >
                        {" "}
                        <span
                          data-acs="address"
                          style={{
                            lineHeight: "1.2",
                            colorScheme: "light only",
                            color: "#212121",
                            fontFamily: "Arial",
                            whiteSpace: "nowrap",
                          }}
                        >
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
      <table style={{ float: "left", width: "100%", marginTop: "10px" }}>
        <tbody>
          <tr>
            <div>
              <VideoComp />

              <div
                style={{
                  float: youtubeUrl ? "right" : "left",
                }}
              >
                <div className="grid grid-cols-2 gap-1">
                  <WedgitsSocialComp />
                </div>
              </div>
            </div>
            <td style={{ float: "left" }}>
              <span
                style={{
                  fontSize: "16px",
                  margin: "10px 10px 10px 0px",
                  float: "left",
                }}
              >
                <QuoteComp />
              </span>
              <p
                style={{
                  fontSize: "15px",
                  width: "100%",
                  float: "left",
                  margin: "10px 0 0 0",
                  width: "100%",
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
            <td
              style={{
                float: "left",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
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
  );
};

export default Template61;
