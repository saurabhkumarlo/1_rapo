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
const Company = "  Design Specialist";
const Website = ". www.gimm.io ";
const Address = "15 Harting St, Sydney NSW 2000";
const img =
  "https://y5t6h9a6.stackpathcdn.com/f098d823-6ffb-4884-8174-3d98360628ba/img.png";
const Template95 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);

  return (
    <div>
      <div style={{ margin: "auto", marginTop: "2%" }}>
        <table
          style={{
            borderRight: "4px solid #62ca3e",
            padding: "0 15px",
            float: "left",
            margin: "0 16px 0 0",
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
                          border={0}
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

                                      fontStyle: "normal",
                                      lineHeight: "20px",
                                      fontWeight: 700,
                                      color: "#62ca3e",
                                      display: "inline",
                                    }}
                                  >
                                    <Namecom Name={Name} />
                                    &nbsp;
                                  </span>
                                </zs-remove>
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",

                                      fontStyle: "normal",
                                      lineHeight: "20px",
                                      fontWeight: 700,
                                      color: "#7d0d6f",
                                      display: "inline",
                                    }}
                                  >
                                    <CompanyComp Company={Company} />
                                    &nbsp;
                                  </span>
                                </zs-remove>
                              </td>
                            </tr>
                            <tr
                              style={{
                                borderCollapse: "collapse",
                                paddingBottom: "8px",
                                height: "8px",
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
                          border={0}
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
                                <zs-remove>
                                  <span
                                    className="ng-binding ng-scope"
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#62ca3e",
                                      display: "inline",
                                    }}
                                  >
                                    e.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",

                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#000000",
                                      display: "inline",
                                    }}
                                  >
                                    <EmailComp />
                                    &nbsp;
                                  </span>
                                </zs-remove>
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#62ca3e",
                                      display: "inline",
                                    }}
                                  >
                                    w.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#000000",
                                      display: "inline",
                                    }}
                                  >
                                    {" "}
                                    <WebsiteComp Website={Website} />
                                    &nbsp;
                                  </span>
                                </zs-remove>
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
                      <td
                        className="ng-scope"
                        role="button"
                        tabIndex={0}
                        style={{ padding: 0 }}
                      >
                        <table
                          border={0}
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
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#62ca3e",
                                      display: "inline",
                                    }}
                                  >
                                    a.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",

                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#000000",
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
                                  paddingBottom: "3px",
                                  height: "3px",
                                }}
                              ></td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  paddingBottom: "8px",
                                  height: "8px",
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

export default Template95;
