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

const Name = "John Smith";
const Company = "Co-Ordinator";
const Website = "www.je-marketing.com";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/79318bf3-8738-4bae-9f3d-fb4921563044/img.png";

const Template50 = () => {
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
              <td
                ng-attr-style="{{$ctrl.defaultTDpadding}}"
                style={{ padding: 0 }}
              >
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
                                  fontSize: "17.0px",
                                  fontStyle: "normal",
                                  lineHeight: "19px",
                                  fontWeight: 700,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "17.0px",
                                      fontStyle: "normal",
                                      lineHeight: "19px",
                                      fontWeight: 700,
                                      color: "#008bb8",
                                      display: "inline",

                                      fontSize:
                                        fontsize === 1
                                          ? "17px"
                                          : `${fontsize / 5 + 17}px`,
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
                                  fontSize: "15.0px",
                                  fontStyle: "normal",
                                  lineHeight: "17px",
                                  fontWeight: 700,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 700,
                                      color: "#000000",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    <CompanyComp Company={Company} />
                                  </span>
                                </zs-remove>
                              </td>
                            </tr>
                            <tr>
                              <td
                                ng-attr-style="{{$ctrl.tdSectionStyle(section.section, 'padding')}}"
                                style={{
                                  borderCollapse: "collapse",
                                  paddingBottom: "3px",
                                  height: "3px",
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
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#008bb8",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    Phone.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#000000",
                                      display: "inline",

                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    <PhoneComp />
                                  </span>
                                </zs-remove>
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#008bb8",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    Mobile.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#000000",
                                      display: "inline",

                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    <MobileComp />
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
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#008bb8",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    Web.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#000000",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
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
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#008bb8",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    Address.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#000000",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
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
                        &gt;
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
                            <SocialComp />
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

export default Template50;
