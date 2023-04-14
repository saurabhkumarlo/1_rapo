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

const Name = "Sandra Sully";
const Company = " Design Team";
const Website = "www.je-marketing.com";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/c532acc2-d6f3-4456-9fed-8a55555e7d87/img.png";
const Template81 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);

  return (
    <div>
      <div style={{ margin: "auto", marginTop: "2%" }}>
        <table style={{ padding: "0 15px 0 0", float: "left" }}>
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
        <table style={{ float: "left", marginLeft: "10px" }}></table>
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
                                  fontFamily: "Calibri, Helvetica, sans-serif",
                                  fontSize: "30.0px",
                                  fontStyle: "normal",
                                  lineHeight: "32px",
                                  fontWeight: 700,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "30.0px",
                                      fontStyle: "normal",
                                      lineHeight: "32px",
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
                                  fontFamily: "Calibri, Helvetica, sans-serif",
                                  fontSize: "18.0px",
                                  fontStyle: "normal",
                                  lineHeight: "20px",
                                  fontWeight: 700,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "18.0px",
                                      fontStyle: "normal",
                                      lineHeight: "20px",
                                      fontWeight: 700,
                                      color: "#eb5757",
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
                                ng-attr-style="{{$ctrl.tdStyle(field)}}"
                                style={{
                                  borderCollapse: "collapse",
                                  paddingBottom: "6px",
                                  height: "6px",
                                }}
                              ></td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily: "Calibri, Helvetica, sans-serif",
                                  fontSize: "14.0px",
                                  fontStyle: "normal",
                                  lineHeight: "16px",
                                  fontWeight: 400,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "14.0px",
                                      fontStyle: "normal",
                                      lineHeight: "16px",
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
                                  paddingBottom: "1px",
                                  height: "1px",
                                }}
                              ></td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily: "Calibri, Helvetica, sans-serif",
                                  fontSize: "14.0px",
                                  fontStyle: "normal",
                                  lineHeight: "16px",
                                  fontWeight: 400,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "14.0px",
                                      fontStyle: "normal",
                                      lineHeight: "16px",
                                      fontWeight: 400,
                                      color: "#454545",
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
                                  fontFamily: "Calibri, Helvetica, sans-serif",
                                  fontSize: "14.0px",
                                  fontStyle: "normal",
                                  lineHeight: "16px",
                                  fontWeight: 400,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "14.0px",
                                      fontStyle: "normal",
                                      lineHeight: "16px",
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
                                  paddingBottom: "6px",
                                  height: "6px",
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
                            <tr
                              style={{
                                borderCollapse: "collapse",
                                paddingBottom: "6px",
                                height: "6px",
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

export default Template81;
