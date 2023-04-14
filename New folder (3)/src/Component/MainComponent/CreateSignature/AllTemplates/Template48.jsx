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
const Name = "John Smith";
const Company = "Co-Ordinator";
const Website = "www.je-marketing.com";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/4bbca465-bc55-4956-a7d5-0106d07d90e8/img.png";
const Template48 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);

  return (
    <div>
      <div style={{ margin: "auto", marginTop: "2%" }}>
        <table style={{ float: "left", marginLeft: "10px" }}>
          <tbody>
            <tr>
              <td>
                {" "}
                <span
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "22.0px",
                    fontStyle: "normal",
                    lineHeight: "24px",
                    fontWeight: 700,
                    color: "#000000",
                    display: "inline",
                  }}
                >
                  <Namecom Name={Name} />
                </span>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <span
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "14.0px",
                    fontStyle: "normal",
                    lineHeight: "16px",
                    fontWeight: 700,
                    color: "#000000",
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
              <td>
                <table cellPadding={0} cellSpacing={0}>
                  <tbody
                    style={{
                      margin: "9px 0 0 0",
                      float: "left",
                      padding: "8px 0",
                    }}
                  >
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
                                  fontSize: "14.0px",
                                  fontStyle: "normal",
                                  lineHeight: "16px",
                                  fontWeight: 700,
                                  color: "#ff0000",
                                  display: "inline",
                                  fontSize:
                                    fontsize === 1
                                      ? "15px"
                                      : `${fontsize / 5 + 15}px`,
                                }}
                              >
                                P{" "}
                              </td>
                              <td
                                style={{
                                  width: "5px",
                                  fontSize: "1pt",
                                  lineHeight: 0,
                                }}
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
                                      color: "#212121",
                                      fontFamily: "Arial",
                                      whiteSpace: "nowrap",
                                      fontSize: "12px",
                                    }}
                                  >
                                    {" "}
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
                                  fontSize: "14.0px",
                                  fontStyle: "normal",
                                  lineHeight: "16px",
                                  fontWeight: 700,
                                  color: "#ff0000",
                                  display: "inline",
                                  fontSize:
                                    fontsize === 1
                                      ? "15px"
                                      : `${fontsize / 5 + 15}px`,
                                }}
                              >
                                W
                              </td>
                              <td
                                style={{
                                  width: "5px",
                                  fontSize: "1pt",
                                  lineHeight: 0,
                                }}
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
                                  href="http://www.je-marketing.com"
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
                                    data-acs="website"
                                    style={{
                                      lineHeight: "1.2",
                                      colorScheme: "light only",
                                      color: "#212121",
                                      fontFamily: "Arial",
                                      whiteSpace: "nowrap",
                                      fontSize: "12px",
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
                                  fontSize: "14.0px",
                                  fontStyle: "normal",
                                  lineHeight: "16px",
                                  fontWeight: 700,
                                  color: "#ff0000",
                                  display: "inline",
                                  fontSize:
                                    fontsize === 1
                                      ? "15px"
                                      : `${fontsize / 5 + 15}px`,
                                }}
                              >
                                E
                              </td>
                              <td
                                style={{
                                  width: "5px",
                                  fontSize: "1pt",
                                  lineHeight: 0,
                                }}
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
                                  href="mailto:jason@je-marketing.com "
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
                                      color: "#212121",
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
                                  fontSize: "14.0px",
                                  fontStyle: "normal",
                                  lineHeight: "16px",
                                  fontWeight: 700,
                                  color: "#ff0000",
                                  display: "inline",
                                  fontSize:
                                    fontsize === 1
                                      ? "15px"
                                      : `${fontsize / 5 + 15}px`,
                                }}
                              >
                                A
                              </td>
                              <td
                                style={{
                                  width: "5px",
                                  fontSize: "1pt",
                                  lineHeight: 0,
                                }}
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
                                  href
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
                                      fontSize: "12px",
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
          </tbody>
        </table>
        <table
          style={{
            borderLeft: "6px solid #ff0000",
            padding: "0 15px",
            margin: "0 0 0 10px",
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
                  marginBottom: "10px",
                  float: "left",
                }}
              >
                <div
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "11px",
                    }}
                  >
                    <SignoffComp />
                  </div>
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
                    marginTop: "10px",
                    float: "left",
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
    </div>
  );
};

export default Template48;
