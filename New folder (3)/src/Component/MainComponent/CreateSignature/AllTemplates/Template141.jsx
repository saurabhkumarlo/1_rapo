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

const Name = "MONICA GILES";
const Company = "Realtor";
const Website = "www.je-marketing.com";
const Address = "1 Example St, Town WA 6301";
const img =
  "https://y5t6h9a6.stackpathcdn.com/aa489d68-ea95-4767-9f06-c1da23c364e3/img.png";
const Template141 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);

  return (
    <>
      <div style={{ margin: "auto", marginTop: "2%" }}>
        <table
          style={{ padding: "0 5px 0 0", float: "left", marginRight: "10px" }}
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
        <table
          ng-attr-style="{{$ctrl.tableStyle()}}"
          border={0}
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
            <tr ng-repeat="row in table.rows" className="ng-scope">
              <td style={{ padding: 0 }}>
                <table
                  border={0}
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
                      <td>
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
                                  fontFamily:
                                    '"Trebuchet MS", Helvetica, sans-serif',
                                  fontSize: "24.0px",
                                  fontStyle: "normal",
                                  lineHeight: "26px",
                                  fontWeight: 400,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica, sans-serif',
                                      fontSize: "24.0px",
                                      fontStyle: "normal",
                                      lineHeight: "26px",
                                      fontWeight: 400,
                                      color: "#2d77ff",
                                      display: "inline",
                                    }}
                                  >
                                    <Namecom Name={Name} />
                                  </span>
                                </zs-remove>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily:
                                    '"Trebuchet MS", Helvetica, sans-serif',
                                  fontSize: "21.0px",
                                  fontStyle: "italic",
                                  lineHeight: "23px",
                                  fontWeight: 400,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica, sans-serif',
                                      fontSize: "21.0px",
                                      fontStyle: "italic",
                                      lineHeight: "23px",
                                      fontWeight: 400,
                                      color: "#666666",
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
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily:
                                    '"Trebuchet MS", Helvetica, sans-serif',
                                  fontSize: "13.0px",
                                  fontStyle: "normal",
                                  lineHeight: "15px",
                                  fontWeight: 400,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica, sans-serif',
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#2d77ff",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "13px"
                                          : `${fontsize / 5 + 13}px`,
                                    }}
                                  >
                                    T.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica, sans-serif',
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#454545",
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
                                  fontFamily:
                                    '"Trebuchet MS", Helvetica, sans-serif',
                                  fontSize: "13.0px",
                                  fontStyle: "normal",
                                  lineHeight: "15px",
                                  fontWeight: 400,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica, sans-serif',
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#2d77ff",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "12px"
                                          : `${fontsize / 5 + 12}px`,
                                    }}
                                  >
                                    M.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica, sans-serif',
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#454545",
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
                                  fontFamily:
                                    '"Trebuchet MS", Helvetica, sans-serif',
                                  fontSize: "13.0px",
                                  fontStyle: "normal",
                                  lineHeight: "15px",
                                  fontWeight: 400,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica, sans-serif',
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#2d77ff",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "12px"
                                          : `${fontsize / 5 + 12}px`,
                                    }}
                                  >
                                    A.
                                  </span>
                                  <span
                                    className="ng-binding ng-scope"
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica, sans-serif',
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#454545",
                                      display: "inline",
                                    }}
                                  >
                                    <AddressComp Address={Address} />
                                  </span>
                                </zs-remove>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily:
                                    '"Trebuchet MS", Helvetica, sans-serif',
                                  fontSize: "13.0px",
                                  fontStyle: "normal",
                                  lineHeight: "15px",
                                  fontWeight: 400,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica, sans-serif',
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#2d77ff",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "12px"
                                          : `${fontsize / 5 + 12}px`,
                                    }}
                                  >
                                    W.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica, sans-serif',
                                      fontSize: "13.0px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#454545",
                                      display: "inline",
                                    }}
                                  >
                                    <WebsiteComp Website={Website} />
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
                          </tbody>
                        </table>
                      </td>
                      <td
                        style={{
                          borderCollapse: "collapse",
                          paddingRight: "8px",
                          width: "8px",
                        }}
                      ></td>
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
                                  lineHeight: "0px",
                                  padding: 0,
                                }}
                              >
                                &gt;
                                <zs-remove>
                                  <img
                                    className="ng-scope"
                                    src="https://y5t6h9a6.stackpathcdn.com/0e213f4a-8613-4286-b36a-fb0081d4ec30/img.png"
                                    style={{}}
                                  />
                                </zs-remove>
                                &gt;
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
              <td style={{ padding: 0 }}>
                <table
                  border={0}
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
                                  borderCollapse: "collapse",
                                  paddingBottom: "4px",
                                  height: "4px",
                                }}
                              />
                            </tr>
                          </tbody>
                        </table>
                        &gt;
                      </td>
                      <td
                        style={{
                          borderCollapse: "collapse",
                          paddingRight: "12px",
                          width: "12px",
                        }}
                      ></td>
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
    </>
  );
};

export default Template141;
