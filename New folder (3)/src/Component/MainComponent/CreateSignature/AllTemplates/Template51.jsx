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
const Name = "Tanya Bisskut";
const Company = "Tim Chivali  CHIEF PROGRAMMER AT TALK.IO";
const Website = "www.gimm.io";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/00d44c71-a188-4285-9f04-62dbe1520309/img.png";

const Template51 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);

  return (
    <div>
      <div style={{ margin: "auto", marginTop: "2%" }}>
        <table style={{ padding: "0 5px 0 0", float: "left" }}>
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
                  <SignatureComp />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{ float: "left", marginLeft: "10px" }}>
          <tbody>
            <tr>
              <td style={{ padding: 0 }}>
                <table
                  style={{
                    fontFamily: "Arial,Helvetica,sans-serif",
                    lineHeight: "0px",
                    fontSize: "1px",
                    padding: "0px",
                    borderSpacing: "0px",
                    margin: "0px",
                    borderCollapse: "collapse",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ padding: 0 }}>
                        <table
                          style={{
                            fontFamily: "Arial,Helvetica,sans-serif",
                            lineHeight: "0px",
                            fontSize: "1px",
                            padding: "0px",
                            borderSpacing: "0px",
                            margin: "0px",
                            borderCollapse: "collapse",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily: "Tahoma, Geneva, sans-serif",
                                  fontSize: "32.0px",
                                  fontStyle: "normal",
                                  lineHeight: "34px",
                                  fontWeight: 700,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "32.0px",
                                      fontStyle: "normal",
                                      lineHeight: "34px",
                                      fontWeight: 700,
                                      color: "#000000",
                                      display: "inline",
                                    }}
                                  >
                                    <CompanyComp Company={Company} />
                                  </span>
                                </zs-remove>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  paddingBottom: "2px",
                                  height: "2px",
                                }}
                              ></td>
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
              <td style={{ padding: 0 }}>
                <table
                  style={{
                    fontFamily: "Arial,Helvetica,sans-serif",
                    lineHeight: "0px",
                    fontSize: "1px",
                    padding: "0px",
                    borderSpacing: "0px",
                    margin: "0px",
                    borderCollapse: "collapse",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ padding: 0 }}>
                        <table
                          style={{
                            fontFamily: "Arial,Helvetica,sans-serif",
                            lineHeight: "0px",
                            fontSize: "1px",
                            padding: "0px",
                            borderSpacing: "0px",
                            margin: "0px",
                            borderCollapse: "collapse",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily: "Tahoma, Geneva, sans-serif",
                                  fontSize: "13.0px",
                                  fontStyle: "normal",
                                  lineHeight: "15px",
                                  fontWeight: 700,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 700,
                                      color: "#4e4e4e",
                                      display: "inline",
                                    }}
                                  >
                                    &nbsp;
                                  </span>
                                </zs-remove>
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 700,
                                      color: "#000000",
                                      display: "inline",
                                    }}
                                  >
                                    &nbsp;
                                  </span>
                                </zs-remove>
                              </td>
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
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  backgroundColor: "#e6e6e6",
                                  height: "2px",
                                  padding: 0,
                                }}
                              />
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
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr ng-repeat="row in table.rows" className="ng-scope">
              <td style={{ padding: 0 }}>
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    fontFamily: "Arial,Helvetica,sans-serif",
                    lineHeight: "0px",
                    fontSize: "1px",
                    padding: "0px",
                    borderSpacing: "0px",
                    margin: "0px",
                    borderCollapse: "collapse",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ padding: 0 }}>
                        <table
                          style={{
                            fontFamily: "Arial,Helvetica,sans-serif",
                            lineHeight: "0px",
                            fontSize: "1px",
                            padding: "0px",
                            borderSpacing: "0px",
                            margin: "0px",
                            borderCollapse: "collapse",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily: "Tahoma, Geneva, sans-serif",
                                  fontSize: "13.0px",
                                  fontStyle: "normal",
                                  lineHeight: "15px",
                                  fontWeight: 700,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#4e4e4e",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    Phone:
                                  </span>
                                  <span
                                    className="ng-binding ng-scope"
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 700,
                                      color: "#000000",
                                      display: "inline",
                                    }}
                                  >
                                    <PhoneComp />
                                  </span>
                                </zs-remove>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  paddingBottom: "1px",
                                  height: "1px",
                                }}
                              ></td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily: "Tahoma, Geneva, sans-serif",
                                  fontSize: "13.0px",
                                  fontStyle: "normal",
                                  lineHeight: "15px",
                                  fontWeight: 700,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#4e4e4e",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    Mobile:
                                  </span>
                                  <span
                                    className="ng-binding ng-scope"
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 700,
                                      color: "#000000",
                                      display: "inline",
                                    }}
                                  >
                                    <MobileComp />
                                  </span>
                                </zs-remove>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  paddingBottom: "1px",
                                  height: "1px",
                                }}
                              ></td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily: "Tahoma, Geneva, sans-serif",
                                  fontSize: "13.0px",
                                  fontStyle: "normal",
                                  lineHeight: "15px",
                                  fontWeight: 700,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#4e4e4e",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    Email:
                                  </span>
                                  <span
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 700,
                                      color: "#000000",
                                      display: "inline",
                                    }}
                                  >
                                    <EmailComp />
                                  </span>
                                </zs-remove>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  paddingBottom: "1px",
                                  height: "1px",
                                }}
                              ></td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily: "Tahoma, Geneva, sans-serif",
                                  fontSize: "13.0px",
                                  fontStyle: "normal",
                                  lineHeight: "15px",
                                  fontWeight: 700,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#4e4e4e",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    Address:
                                  </span>
                                  <span
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 700,
                                      color: "#000000",
                                      display: "inline",
                                    }}
                                  >
                                    <AddressComp Address={Address} />
                                  </span>
                                </zs-remove>
                              </td>
                            </tr>
                            <tr
                              style={{
                                borderCollapse: "collapse",
                                paddingBottom: "7px",
                                height: "7px",
                              }}
                            ></tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td style={{ padding: 0 }}>
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    fontFamily: "Arial,Helvetica,sans-serif",
                    lineHeight: "0px",
                    fontSize: "1px",
                    padding: "0px",
                    borderSpacing: "0px",
                    margin: "0px",
                    borderCollapse: "collapse",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ padding: 0 }}>
                        <table
                          cellPadding={0}
                          cellSpacing={0}
                          className="ng-scope"
                          style={{
                            fontFamily: "Arial,Helvetica,sans-serif",
                            lineHeight: "0px",
                            fontSize: "1px",
                            padding: "0px",
                            borderSpacing: "0px",
                            margin: "0px",
                            borderCollapse: "collapse",
                          }}
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

export default Template51;
