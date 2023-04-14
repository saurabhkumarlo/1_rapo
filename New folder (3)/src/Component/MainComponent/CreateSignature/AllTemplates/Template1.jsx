import React, { useEffect, useState } from "react";
// import "./DesignFonts.css"
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

const Name = "";
const Company = "";
const Website = "";
const Address = "";
const Phone = "";
const img = "";
// "https://y5t6h9a6.stackpathcdn.com/79318bf3-8738-4bae-9f3d-fb4921563044/img.png";
const Template1 = () => {
  const { youtubeUrl, videoconf } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);
  const {
    phonenumber,
    company,
    mobilenumber,
    website,
    address,
    images,
    email,
  } = useSelector((state) => state.general);
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td
                      style={{
                        paddingRight: "10px",
                      }}
                    >
                      <div
                        style={{
                          borderRight: images === "" ? null : "1px solid #000",
                        }}
                      >
                        <div>
                          {images === null ? null : (
                            <span
                              style={{
                                fontFamily: "Calibri, Helvetica, sans-serif",
                                fontSize: "15px",
                                fontStyle: "normal",
                                lineHeight: "17px",
                                fontWeight: 400,
                                color: "#000000",
                                padding: "10px 0px",
                                display: "inline",
                              }}
                            >
                              <SignoffComp />
                            </span>
                          )}
                        </div>
                        <div>{images === null ? null : <ImgComp />}</div>
                        <div>
                          <span
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif",
                              fontSize: "9px",
                              fontStyle: "normal",
                              lineHeight: "10px",
                              fontWeight: "normal",
                              color: "#777777",
                              marginRight: "5px",
                            }}
                          >
                            {images === null ? null : <SignatureComp />}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{
                        paddingLeft: "8px",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontFamily: "Calibri, Helvetica, sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            lineHeight: "19px",
                            fontWeight: 700,
                            color: "#008bb8",
                            display: "inline",
                          }}
                        >
                          <Namecom Name={Name} />
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "Calibri, Helvetica, sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          lineHeight: "17px",
                          fontWeight: 700,
                          color: "#000000",
                          display: "inline",
                        }}
                      >
                        <CompanyComp Company={Company} />
                      </span>
                      <div>
                        <span
                          style={{
                            fontFamily: "Calibri, Helvetica, sans-serif",
                            fontSize: "15px",
                            fontStyle: "normal",
                            lineHeight: "17px",
                            fontWeight: 400,
                            color: "#008bb8",
                            display: "inline",
                          }}
                        >
                          {phonenumber === "" ? null : "  Phone."}
                        </span>
                        <span
                          style={{
                            fontFamily: "Calibri, Helvetica, sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            lineHeight: "17px",
                            fontWeight: 400,
                            color: "#000000",
                          }}
                        >
                          <PhoneComp />
                          &nbsp;
                        </span>
                        <span
                          style={{
                            fontFamily: "Calibri, Helvetica, sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            lineHeight: "17px",
                            fontWeight: 400,
                            color: "#008bb8",
                            display: "inline",
                          }}
                        >
                          {mobilenumber === "" ? null : "  Mobile."}
                        </span>
                        <span
                          style={{
                            fontFamily: "Calibri, Helvetica, sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            lineHeight: "17px",
                            fontWeight: 400,
                            color: "#000000",
                            display: "inline",
                          }}
                        >
                          <MobileComp />
                          &nbsp;
                        </span>
                        <div>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "14px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
                              color: "#008bb8",
                              display: "inline",
                            }}
                          >
                            {website === "" ? null : "  Web. "}
                          </span>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "14px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
                              color: "#000000",
                              display: "inline",
                            }}
                          >
                            <WebsiteComp />
                          </span>
                        </div>
                        <div>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "14px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
                              color: "#008bb8",
                              display: "inline",
                            }}
                          >
                            {address === "" ? null : "Address "}
                          </span>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "15px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
                              color: "#000000",
                              display: "inline",
                            }}
                          >
                            <AddressComp />
                          </span>
                        </div>
                        <span
                          style={{
                            display: "flex",
                            padding: "8px 0px",
                            marginTop: "5px",
                          }}
                        >
                          <SocialComp />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <table>
        <tbody>
          <tr>
            <td>
              <table
                style={{ float: "left", width: "100%", marginTop: "28px" }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        float: "left",
                        backgroundColor: "blue",
                        width: "100%",
                      }}
                    >
                      <VideoComp />
                    </td>
                    <td
                      style={{
                        float: "left",
                        backgroundColor: "red",
                        width: "100%",
                      }}
                    >
                      <div>
                        <WedgitsSocialComp />
                      </div>
                    </td>

                    <td style={{ float: "left", width: "100%" }}>
                      <div
                        style={{
                          fontSize: "16px",
                          margin: "5px 0 0 0",
                          float: "left",
                        }}
                      >
                        <QuoteComp />
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: "15px",
                            float: "left",
                            margin: "10px 0 0 0",
                          }}
                        >
                          <Disclamer />
                        </p>
                      </div>

                      <a
                        href="#"
                        style={{
                          float: "left",
                          color: "#000",
                          margin: "13px 0 0 0",
                          fontSize: "17px",
                          background: "gray",
                          padding: "8px 18px 8px 18px",
                          borderRadius: "4px",
                          textDecoration: "none",
                        }}
                      >
                        <i
                          className="fa fa-video-camera"
                          aria-hidden="true"
                          style={{
                            lineHeight: 1,
                            fontSize: "13px",
                            margin: "0 6px 0 0",
                          }}
                        ></i>
                        meet me!
                      </a>
                    </td>
                    <td style={{ float: "left" }}>
                      <p style={{ color: "#2b9a2b", fontSize: "18px" }}>
                        <img
                          src="images/mail.png"
                          alt=""
                          style={{
                            width: "20px",
                            lineHeight: 1,
                            margin: "1px 11px 0 0",
                            float: "left",
                          }}
                        />
                        Please consider the environment before priting this
                        e-mail!
                      </p>
                      <img src="images/banner.png" alt="" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table> */}

      <table>
        <tbody>
          <tr>
            <td>
              <table
                style={{ float: "left", width: "100%", marginTop: "28px" }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        float: "left",
                        width: "100%",
                      }}
                    >
                      <VideoComp />
                    </td>
                    <td
                      style={{
                        float: "left",
                        width: "100%",
                      }}
                    >
                      <div>
                        <WedgitsSocialComp />
                      </div>
                    </td>
                    <td style={{ float: "left", width: "100%" }}>
                      <div
                        style={{
                          fontSize: "16px",
                          margin: "5px 0 0 0",
                          float: "left",
                        }}
                      >
                        <QuoteComp />
                      </div>
                    </td>
                    <td style={{ float: "left", width: "100%" }}>
                      <div>
                        <p
                          style={{
                            fontSize: "15px",
                            float: "left",
                            // margin: "10px 0 0 0",
                          }}
                        >
                          <Disclamer />
                        </p>
                      </div>
                    </td>
                    <td
                      style={{
                        float: "left",
                        width: "100%",
                        // display: "flex",
                        // alignItems: "center",
                        // gap: "2px",
                        textDecoration: "none",
                      }}
                    >
                      {videoconf === "" ? null : (
                        <span
                          href="#"
                          style={{
                            float: "left",
                            margin: " 14px 0 0 0",
                            fontSize: "17px",
                            background: videoconf === "" ? null : "gray",
                            padding: "8px 18px ",
                            borderRadius: "4px",
                            textDecoration: "none",
                          }}
                        >
                          <VideoConfComp />
                        </span>
                      )}
                      &nbsp;
                      <span
                        style={{
                          textDecoration: "none",
                          float: "left",
                          // color: "#000",
                          margin: " 13px 0 0 0",
                          paddingLeft: videoconf === "" ? null : "7px",
                          // background: videoconf === "" ? null : "gray",
                        }}
                      >
                        <CTAComp />
                      </span>
                    </td>
                    <td
                      style={{
                        float: "left",
                        color: "green",
                        fontSize: "13px",
                        // display: "flex",
                        // gap: "2",
                        // alignItems: "center",
                        // justifyItems: "center",
                      }}
                    >
                      <p>
                        <GreenMsgComp />
                      </p>
                      <BannerComp />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Template1;

{
  /* <div style={{ margin: "auto", marginTop: "2%" }}>
        <table
          style={{ borderRight: "1px solid", padding: "0 15px", float: "left" }}
        >
          <tbody>
            <tr>
              {images === null ? null : (
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
                  <td>
                    {" "}
                    <SignoffComp />
                  </td>
                </td>
              )}
            </tr>
            <tr>
              <td>{images === null ? null : <ImgComp />}</td>
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
                <p
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "9.0px",
                    fontStyle: "normal",
                    lineHeight: "10px",
                    fontWeight: "normal",
                    color: "#777777",
                  }}
                >
                  <td>
                    {" "}
                    <td>{images === null ? null : <SignatureComp />}</td>
                  </td>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{}}>
          <table style={{ float: "left", marginLeft: "15px" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    lineHeight: "26px",
                    fontWeight: 700,
                    display: "inline",
                  }}
                >
                  <Namecom Name={Name} />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    lineHeight: "26px",
                    fontWeight: 700,

                    display: "inline",
                  }}
                >
                  <CompanyComp Company={Company} />
                </td>
              </tr>
            </tbody>
            <tbody style={{}}>
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
                      fontStyle: "normal",
                      lineHeight: "22px",
                      fontWeight: 400,
                      color: "#008bb8",
                      display: "inline",
                      fontSize:
                        fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                    }}
                  >
                    {phonenumber === "" ? null : "Phone."}
                  </span>
                  <span
                    style={{
                      lineHeight: "22px",
                      fontWeight: 400,
                      display: "inline",
                    }}
                  >
                    <PhoneComp Phone={Phone} />
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: "Calibri, Helvetica, sans-serif",
                      fontStyle: "normal",
                      lineHeight: "26px",
                      fontWeight: 400,
                      color: "#008bb8",
                      display: "inline",
                      fontSize:
                        fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                    }}
                  >
                    {mobilenumber === "" ? null : "Mobile."}
                  </span>
                  <span
                    style={{
                      lineHeight: "26px",
                      fontWeight: 400,
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
                      fontStyle: "normal",
                      lineHeight: "26px",
                      fontWeight: 400,
                      color: "#008bb8",
                      display: "inline",
                      fontSize:
                        fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                    }}
                  >
                    {website === "" ? null : " Web."}
                  </span>
                  <span
                    style={{
                      lineHeight: "26px",
                      fontWeight: 400,

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
                      fontStyle: "normal",
                      lineHeight: "17px",
                      fontWeight: 400,
                      color: "#008bb8",
                      display: "inline",
                      fontSize:
                        fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                    }}
                  >
                    {address === "" ? null : " Address."}
                  </span>
                  <span
                    style={{
                      lineHeight: "17px",
                      fontWeight: 400,

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
            <tbody style={{ marginTop: "10px" }}>
              <SocialComp />
            </tbody>
          </table>

          <table className="mt-10 w-full flex-row flex justify-between">
            <tbody>
              <tr>
                <div>
                  <VideoComp />

                  <div
                    style={{
                      float: youtubeUrl ? "right" : "left",
                      marginTop: "10px",
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
                      // background: "gray",
                      padding: "8px 32px 8px 32px",
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
      </div> */
}

{
  /* <div style={{ margin: "auto" }}>
        <table style={{ borderRight: "1px solid", float: "left" }}>
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
              Kind Regards,
            </td>
          </tr>
          <tr>
            <td>
              <img
                height={120}
                width={120}
                alt=""
                border={0}
                ng-attr-style="{{$ctrl.changeImageShape(logoSection.fields[0])}}"
                className="ng-scope"
                src="https://y5t6h9a6.stackpathcdn.com/79318bf3-8738-4bae-9f3d-fb4921563044/img.png"
                style={{}}
              />
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
                Get your own signature
              </a>
            </td>
          </tr>
        </table>
        <table>
          <tbody>
            <tr>
              <td
                style={{
                  fontFamily: "Calibri, Helvetica, sans-serif",
                  fontSize: "17.0px",
                  fontStyle: "normal",
                  lineHeight: "19px",
                  fontWeight: 700,
                  color: "#008bb8",
                  display: "inline",
                }}
              >
                Tanya Bisskutt
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
                Real Estate Agent
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
                    color: "#008bb8",
                    display: "inline",
                  }}
                >
                  Phone.
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
                  +1 2291 8372&nbsp;
                </span>
                <span
                  style={{
                    fontFamily: "Calibri, Helvetica, sans-serif",
                    fontSize: "15.0px",
                    fontStyle: "normal",
                    lineHeight: "17px",
                    fontWeight: 400,
                    color: "#008bb8",
                    display: "inline",
                  }}
                >
                  Mobile.
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
                  +1 9281 7726&nbsp;
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
                    color: "#008bb8",
                    display: "inline",
                  }}
                >
                  Web.
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
                  www.gimm.io
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
                    color: "#008bb8",
                    display: "inline",
                  }}
                >
                  Address.
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
                  Level 12, 69 Example Street, WA 6029
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
            <tr style={{ float: "left" }}>
              <td style={{ paddingRight: "3px" }}>
                <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05facebook.gif" />
              </td>
              <td style={{ paddingRight: "3px" }}>
                <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05twitter.gif" />
              </td>
              <td style={{ paddingRight: "3px" }}>
                <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05linkedin.gif" />
              </td>
              <td style={{ paddingRight: "3px" }}>
                <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05google-plus.gif" />
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{ float: "left", width: "100%", marginTop: "10px" }}>
          <tbody>
            <tr>
              <td style={{ float: "left" }}>
                <video
                  width={90}
                  height={70}
                  controls
                  style={{ float: "left", margin: "0 8px 0 0" }}
                >
                  <source src="movie.mp4" type="video/mp4" />
                  <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    margin: 0,
                    width: "275px",
                    float: "left",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <a
                  href="#"
                  style={{
                    background: "#4267B2",
                    color: "#fff",
                    float: "left",
                    textDecoration: "none",
                    padding: "8px 14px 9px 19px",
                    width: "74px",
                  }}
                >
                  Facebook
                </a>
                <a
                  href="#"
                  style={{
                    background:
                      "linear-gradient(to bottom, #9900ff 0%, #f16632 100%)",
                    float: "left",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "8px 14px 9px 19px",
                    width: "74px",
                  }}
                >
                  Instagram
                </a>
              </td>
              <td style={{ float: "left" }}>
                <span
                  style={{
                    fontSize: "16px",
                    margin: "5px 0 0 0",
                    float: "left",
                  }}
                >
                  William Shakespeare quote......
                </span>
                <p
                  style={{
                    fontSize: "15PX",
                    float: "left",
                    margin: "10px 0 0 0",
                  }}
                >
                  IMPORTANT: Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <a
                  href="#"
                  style={{
                    float: "left",
                    color: "#000",
                    margin: "13px 0 0 0",
                    fontSize: "17px",
                    background: "gray",
                    padding: "8px 18px 8px 18px",
                    borderRadius: "4px",
                    textDecoration: "none",
                  }}
                >
                  <i
                    className="fa fa-video-camera"
                    aria-hidden="true"
                    style={{
                      lineHeight: 1,
                      fontSize: "13px",
                      margin: "0 6px 0 0",
                    }}
                  />
                  meet me!
                </a>
              </td>
              <td style={{ float: "left" }}>
                <p style={{ color: "#2b9a2b", fontSize: "18px" }}>
                  <img
                    src="images/mail.png"
                    alt=""
                    style={{
                      width: "20px",
                      lineHeight: 1,
                      margin: "1px 11px 0 0",
                      float: "left",
                    }}
                  />
                  Please consider the environment before priting this e-mail!
                </p>
                <img src="images/banner.png" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div> */
}
