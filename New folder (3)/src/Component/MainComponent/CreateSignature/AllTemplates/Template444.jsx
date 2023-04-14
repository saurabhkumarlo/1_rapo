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

const Name = "Jason Erickson";
const Company = " Online marketer, JE marketing";
const Website = "www.je-marketing.com";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/a9c7abae-71bc-4b37-8e0c-b3fd87c29962/img.png";
const Template444 = () => {
  const { youtubeUrl, email } = useSelector((state) => state.counter);
  const { fontsize, colors } = useSelector((state) => state.design);
  return (
    <div>
      <div style={{ margin: "auto", marginTop: "2%" }}>
        <table style={{ padding: "0 5px 0 0", float: "left" }}>
          <tbody>
            <tr>
              <td style={{ textAlign: "center", lineHeight: "1.2" }}>
                {" "}
                <span
                  className="ws-tpl-name"
                  style={{
                    fontFamily: "Arial",
                    textTransform: "initial",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  <span
                    data-acs="name"
                    style={{
                      color: "#45668E",
                      fontSize: "18.0px",
                      colorScheme: "light",
                    }}
                  >
                    {" "}
                    <Namecom Name={Name} />
                  </span>{" "}
                </span>
                <br />{" "}
                <span
                  data-acs="title"
                  className="ws-tpl-title"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0px",
                    fontFamily: "Arial",
                    textTransform: "initial",
                    fontWeight: "bold",
                    color: "#333",
                    colorScheme: "light",
                  }}
                >
                  {" "}
                  <CompanyComp Company={Company} />
                </span>{" "}
              </td>
            </tr>
            <tr>
              <td align="center" style={{ width: "65px", padding: 0 }}>
                <ImgComp img={img} />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", lineHeight: "1.2" }}>
                {" "}
                <span
                  style={{
                    fontFamily: "Arial",
                    textTransform: "initial",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "9.0px",
                      fontStyle: "normal",
                      lineHeight: "10px",
                      fontWeight: "normal",
                      color: "#777777",
                      marginTop: "10px",
                    }}
                  >
                    <div style={{ marginBottom: "10px" }}>
                      <SignatureComp />
                    </div>
                  </span>{" "}
                </span>
              </td>
            </tr>

            <tr>
              <td
                style={{
                  verticalAlign: "top",
                  textAlign: "center",
                  lineHeight: "0%",
                  fontSize: "1pt",
                  padding: "20px",
                  backgroundColor: "#ff0000",
                  color: "#fff",
                }}
                valign="top"
              >
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ color: "#fff" }}
                  align="center"
                >
                  <tbody>
                    <tr>
                      <td style={{ lineHeight: 0 }}>
                        <table cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td>
                                <table
                                  cellPadding={0}
                                  cellSpacing={0}
                                  align="center"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          lineHeight: "0%",
                                          paddingBottom: "6px",
                                        }}
                                      >
                                        <table
                                          className="ws-tpl-phone"
                                          cellPadding={0}
                                          cellSpacing={0}
                                          align="center"
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
                                                  padding: "0 4px 0 0",
                                                  colorScheme: "light only",
                                                  fontFamily: "Arial",
                                                  fontWeight: "bold",
                                                  fontSize: "12px",
                                                  color: "#FFFFFF",
                                                  WebkitTextFillColor:
                                                    "#FFFFFF",
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
                                                    color: "#FFFFFF",
                                                    WebkitTextFillColor:
                                                      "#FFFFFF",
                                                  }}
                                                >
                                                  {" "}
                                                  <font
                                                    style={{
                                                      colorScheme: "light only",
                                                      lineHeight: "1.2",
                                                      color: "#FFFFFF",
                                                      WebkitTextFillColor:
                                                        "#FFFFFF",
                                                      fontSize:
                                                        fontsize === 1
                                                          ? "15px"
                                                          : `${
                                                              fontsize / 5 + 15
                                                            }px`,
                                                    }}
                                                  >
                                                    {" "}
                                                    P{" "}
                                                  </font>{" "}
                                                </a>{" "}
                                              </td>
                                              <td
                                                style={{
                                                  width: "5px",
                                                  fontSize: "1pt",
                                                  lineHeight: 0,
                                                }}
                                                width={5}
                                              />
                                              <td
                                                style={{
                                                  colorScheme: "light only",
                                                  color: "#FFFFFF",
                                                  WebkitTextFillColor:
                                                    "#FFFFFF",
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
                                                    color: "#FFFFFF",
                                                    WebkitTextFillColor:
                                                      "#FFFFFF",
                                                  }}
                                                >
                                                  {" "}
                                                  <font
                                                    data-acs="phone"
                                                    style={{
                                                      colorScheme: "light only",
                                                      lineHeight: "1.2",
                                                      color: "#FFFFFF",
                                                      WebkitTextFillColor:
                                                        colors,
                                                      fontFamily: "Arial",
                                                      whiteSpace: "nowrap",
                                                      fontSize: "12px",
                                                    }}
                                                  >
                                                    {" "}
                                                    <PhoneComp />
                                                  </font>{" "}
                                                </a>{" "}
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td
                                        style={{
                                          lineHeight: "0%",
                                          paddingBottom: "6px",
                                        }}
                                      >
                                        <table
                                          className="ws-tpl-website"
                                          cellPadding={0}
                                          cellSpacing={0}
                                          align="center"
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
                                                  padding: "0 6px",
                                                }}
                                              >
                                                {" "}
                                                <a
                                                  href=""
                                                  style={{
                                                    colorScheme: "light only",
                                                    textDecoration: "none",
                                                    fontFamily: "Arial",
                                                    fontWeight: "bold",
                                                    fontSize: "12px",
                                                    color: "#FFFFFF",
                                                    WebkitTextFillColor:
                                                      "#FFFFFF",
                                                  }}
                                                >
                                                  {" "}
                                                </a>{" "}
                                              </td>
                                              <td
                                                style={{
                                                  colorScheme: "light only",
                                                  fontFamily: "Arial",
                                                  fontWeight: "bold",
                                                  fontSize: "12px",
                                                  color: "#FFFFFF",
                                                  WebkitTextFillColor:
                                                    "#FFFFFF",
                                                }}
                                              >
                                                {" "}
                                                <a
                                                  href=""
                                                  style={{
                                                    colorScheme: "light only",
                                                    textDecoration: "none",
                                                    fontSize: "12px",
                                                    fontFamily: "Arial",
                                                    color: "#FFFFFF",
                                                    WebkitTextFillColor:
                                                      "#FFFFFF",
                                                  }}
                                                >
                                                  {" "}
                                                  <font
                                                    style={{
                                                      colorScheme: "light only",
                                                      lineHeight: "1.2",
                                                      color: "#FFFFFF",
                                                      WebkitTextFillColor:
                                                        "#FFFFFF",
                                                      padding: "0 4px 0 0",
                                                      fontSize:
                                                        fontsize === 1
                                                          ? "15px"
                                                          : `${
                                                              fontsize / 5 + 15
                                                            }px`,
                                                    }}
                                                  >
                                                    {" "}
                                                    W{" "}
                                                  </font>{" "}
                                                </a>{" "}
                                              </td>
                                              <td
                                                style={{
                                                  width: "5px",
                                                  fontSize: "1pt",
                                                  lineHeight: 0,
                                                }}
                                                width={5}
                                              />
                                              <td
                                                style={{
                                                  colorScheme: "light only",
                                                  color: "#FFFFFF",
                                                  WebkitTextFillColor:
                                                    "#FFFFFF",
                                                  fontFamily: "Arial",
                                                  fontSize: "12px",
                                                }}
                                              >
                                                {" "}
                                                <a
                                                  href=""
                                                  style={{
                                                    colorScheme: "light only",
                                                    textDecoration: "none",
                                                    fontSize: "12px",
                                                    fontFamily: "Arial",
                                                    color: "#FFFFFF",
                                                    WebkitTextFillColor:
                                                      "#FFFFFF",
                                                  }}
                                                >
                                                  {" "}
                                                  <font
                                                    data-acs="website"
                                                    style={{
                                                      colorScheme: "light only",
                                                      lineHeight: "1.2",
                                                      color: "#FFFFFF",
                                                      WebkitTextFillColor:
                                                        colors,
                                                      fontFamily: "Arial",
                                                      whiteSpace: "nowrap",
                                                      fontSize: "12px",
                                                    }}
                                                  >
                                                    {" "}
                                                    <WebsiteComp
                                                      Website={Website}
                                                    />
                                                  </font>{" "}
                                                </a>{" "}
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td
                                        style={{
                                          lineHeight: "0%",
                                          paddingBottom: "6px",
                                        }}
                                      >
                                        <table
                                          className="ws-tpl-email"
                                          cellPadding={0}
                                          cellSpacing={0}
                                          align="center"
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
                                                  padding: "0 6px",
                                                }}
                                              >
                                                {" "}
                                                <a
                                                  href=""
                                                  style={{
                                                    colorScheme: "light only",
                                                    textDecoration: "none",
                                                    fontFamily: "Arial",
                                                    fontWeight: "bold",
                                                    fontSize: "12px",
                                                    color: "#FFFFFF",
                                                    WebkitTextFillColor:
                                                      "#FFFFFF",
                                                  }}
                                                >
                                                  {" "}
                                                </a>{" "}
                                              </td>
                                              <td
                                                style={{
                                                  colorScheme: "light only",
                                                  fontFamily: "Arial",
                                                  fontWeight: "bold",
                                                  fontSize: "12px",
                                                  color: "#FFFFFF",
                                                  WebkitTextFillColor:
                                                    "#FFFFFF",
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
                                                    color: "#FFFFFF",
                                                    WebkitTextFillColor:
                                                      "#FFFFFF",
                                                  }}
                                                >
                                                  {" "}
                                                  <font
                                                    style={{
                                                      colorScheme: "light only",
                                                      lineHeight: "1.2",
                                                      color: "#FFFFFF",
                                                      WebkitTextFillColor:
                                                        "#FFFFFF",
                                                      padding: "0 4px 0 0",
                                                      fontSize:
                                                        fontsize === 1
                                                          ? "15px"
                                                          : `${
                                                              fontsize / 5 + 15
                                                            }px`,
                                                    }}
                                                  >
                                                    {" "}
                                                    E{" "}
                                                  </font>{" "}
                                                </a>{" "}
                                              </td>
                                              <td
                                                style={{
                                                  width: "5px",
                                                  fontSize: "1pt",
                                                  lineHeight: 0,
                                                }}
                                                width={5}
                                              />
                                              <td
                                                style={{
                                                  colorScheme: "light only",
                                                  color: "#FFFFFF",
                                                  WebkitTextFillColor:
                                                    "#FFFFFF",
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
                                                    color: "#FFFFFF",
                                                    WebkitTextFillColor:
                                                      "#FFFFFF",
                                                  }}
                                                >
                                                  {" "}
                                                  <font
                                                    data-acs="email"
                                                    style={{
                                                      colorScheme: "light only",
                                                      lineHeight: "1.2",
                                                      color: "#FFFFFF",
                                                      WebkitTextFillColor:
                                                        colors,
                                                      fontFamily: "Arial",
                                                      whiteSpace: "nowrap",
                                                      fontSize: "12px",
                                                    }}
                                                  >
                                                    {" "}
                                                    <EmailComp />
                                                  </font>{" "}
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
                            <tr>
                              <td>
                                <table
                                  cellPadding={0}
                                  cellSpacing={0}
                                  align="center"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          lineHeight: "0%",
                                          paddingBottom: "6px",
                                        }}
                                      >
                                        <table
                                          className="ws-tpl-address"
                                          cellPadding={0}
                                          cellSpacing={0}
                                          align="center"
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
                                                  color: "#FFFFFF",
                                                  WebkitTextFillColor:
                                                    "#FFFFFF",
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
                                                    color: "#FFFFFF",
                                                    WebkitTextFillColor:
                                                      "#FFFFFF",
                                                  }}
                                                >
                                                  {" "}
                                                  <font
                                                    style={{
                                                      colorScheme: "light only",
                                                      lineHeight: "1.2",
                                                      color: "#FFFFFF",
                                                      WebkitTextFillColor:
                                                        "#FFFFFF",
                                                    }}
                                                  >
                                                    {" "}
                                                    A{" "}
                                                  </font>{" "}
                                                </a>{" "}
                                              </td>
                                              <td
                                                style={{
                                                  width: "5px",
                                                  fontSize: "1pt",
                                                  lineHeight: 0,
                                                }}
                                                width={5}
                                              />
                                              <td
                                                style={{
                                                  colorScheme: "light only",
                                                  color: "#FFFFFF",
                                                  WebkitTextFillColor:
                                                    "#FFFFFF",
                                                  fontFamily: "Arial",
                                                  fontSize: "12px",
                                                }}
                                              >
                                                {" "}
                                                <a
                                                  href="https://maps.google.com/?q=1937 Fieldcrest Road, NY 10011"
                                                  target="_blank"
                                                  style={{
                                                    colorScheme: "light only",
                                                    textDecoration: "none",
                                                    fontSize: "12px",
                                                    fontFamily: "Arial",
                                                    color: "#FFFFFF",
                                                    WebkitTextFillColor:
                                                      "#FFFFFF",
                                                  }}
                                                >
                                                  {" "}
                                                  <font
                                                    data-acs="address"
                                                    style={{
                                                      colorScheme: "light only",
                                                      lineHeight: "1.2",
                                                      color: "#FFFFFF",
                                                      WebkitTextFillColor:
                                                        colors,
                                                      fontFamily: "Arial",
                                                      whiteSpace: "nowrap",
                                                      fontSize: "12px",
                                                      fontSize:
                                                        fontsize === 1
                                                          ? "15px"
                                                          : `${
                                                              fontsize / 5 + 15
                                                            }px`,
                                                    }}
                                                  >
                                                    {" "}
                                                    <AddressComp
                                                      Address={Address}
                                                    />
                                                  </font>{" "}
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
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style={{
                          textAlign: "center",
                          paddingTop: "12px",
                          lineHeight: "0%",
                          fontSize: "1pt",
                        }}
                      >
                        <table
                          className="ws-tpl-social"
                          cellPadding={0}
                          cellSpacing={0}
                          align="center"
                        >
                          <tbody>
                            <tr>
                              <td
                                align="center"
                                style={{ textAlign: "center" }}
                              >
                                <table
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                >
                                  <tbody>
                                    <div
                                      style={{
                                        marginTop: "10px",
                                      }}
                                    >
                                      <SocialComp />
                                    </div>
                                  </tbody>
                                </table>
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

export default Template444;
