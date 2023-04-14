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
const Company = "Real Estate Agent";
const Website = "www.je-marketing.com";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/79318bf3-8738-4bae-9f3d-fb4921563044/img.png";

const Template21 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td style={{ paddingRight: "10px" }}>
                      <div style={{ paddingBottom: "15px" }}>
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
                          Kind Regards,
                        </span>
                      </div>
                      <div style={{ paddingBottom: "15px" }}>
                        <img
                          src="https://d1n2mpfyq0bf3x.cloudfront.net/06171157455d7f23f4dbacb348854341/default-sig-photo.jpg#logo"
                          height={65}
                          width={65}
                          style={{
                            width: "65px",
                            verticalAlign: "initial",
                            borderRadius: "50%",
                            mozBorderRadius: "50%",
                            khtmlBorderRadius: "50%",
                            oBorderRadius: "50%",
                            webkitBorderRadius: "50%",
                            msBorderRadius: "50%",
                            display: "block",
                            height: "65px",
                          }}
                        />
                      </div>
                      {/* <div>
                                <span>
                                    <a href="" style="font-family: Arial, Helvetica, sans-serif;
                                        font-size: 9px;
                                        font-style: normal;
                                        line-height: 10px;
                                        font-weight: normal;
                                        color: #777777;
                                        ">Get your own signature
                                    </a>
                                </span>
                            </div> */}
                    </td>
                    <td style={{ paddingLeft: "10px" }}>
                      <div style={{ position: "absolute", top: "15px" }}>
                        <div>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "17px",
                              fontStyle: "normal",
                              lineHeight: "19px",
                              fontWeight: 700,
                              color: "#45668E",
                              display: "inline",
                            }}
                          >
                            Jason Erickson
                          </span>
                        </div>
                        <div style={{ paddingBottom: "4px" }}>
                          <span
                            style={{
                              fontSize: "12px",
                              letterSpacing: "0px",
                              fontWeight: "bold",
                              color: "#444",
                              marginBottom: "5px",
                              float: "left",
                            }}
                          >
                            Online marketer, JE marketing
                          </span>
                        </div>
                        &nbsp;
                        <div
                          style={{
                            borderTop: "1px solid #dbdbdb",
                            borderBottom: "1px solid #dbdbdb",
                            padding: "10px 0px",
                          }}
                        >
                          <div>
                            <a
                              href=""
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                              }}
                            >
                              <img
                                src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
                                style={{
                                  verticalAlign: "-2px",
                                  lineHeight: "1.2",
                                }}
                              />
                            </a>
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
                                212-931-0000{" "}
                              </span>{" "}
                            </a>
                            &nbsp;
                          </div>
                          <div style={{ paddingTop: "7px" }}>
                            <a
                              href=""
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                              }}
                            >
                              <img
                                src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                                style={{
                                  verticalAlign: "-2px",
                                  lineHeight: "1.2",
                                }}
                              />
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
                                www.je-marketing.com{" "}
                              </span>
                            </a>
                            &nbsp;
                          </div>
                          <div style={{ paddingTop: "7px" }}>
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
                              <img
                                src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                                style={{
                                  verticalAlign: "-2px",
                                  lineHeight: "1.2",
                                }}
                              />
                              <span
                                data-acs="email"
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
                                jason@je-marketing.com
                              </span>
                            </a>
                          </div>
                          <div
                            style={{ paddingTop: "6px", paddingBottom: "5px" }}
                          >
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
                              <img
                                src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                                style={{
                                  verticalAlign: "-2px",
                                  lineHeight: "1.2",
                                }}
                              />
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
                                1937 Fieldcrest Road, NY 10011{" "}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{
                          position: "absolute",
                          top: "8px",
                          left: "21%",
                          paddingLeft: "50px",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: "flex",
                              wordSpacing: "2px",
                              paddingTop: "10px",
                            }}
                          >
                            <a
                              href="http://www.facebook.com/username"
                              target="_blank"
                              style={{
                                fontSize: "11px",
                                color: "#444",
                                textDecoration: "none",
                              }}
                            >
                              <img
                                width={24}
                                height={24}
                                src="https://cdn.gifo.wisestamp.com/social/facebook/3b5998/48/0/background.png"
                                style={{ float: "left", border: "none" }}
                                border={0}
                              />
                            </a>
                            &nbsp;
                            <a
                              href="http://us.linkedin.com/username"
                              target="_blank"
                              style={{
                                fontSize: "11px",
                                color: "#444",
                                textDecoration: "none",
                              }}
                            >
                              <img
                                width={24}
                                height={24}
                                src="https://cdn.gifo.wisestamp.com/social/linkedin/0077b5/48/0/background.png"
                                style={{ float: "left", border: "none" }}
                                border={0}
                              />
                            </a>
                            &nbsp;
                            <a
                              href="http://twitter.com/username"
                              target="_blank"
                              style={{
                                fontSize: "11px",
                                color: "#444",
                                textDecoration: "none",
                              }}
                            >
                              <img
                                width={24}
                                height={24}
                                src="https://cdn.gifo.wisestamp.com/social/twitter/55acee/48/0/background.png"
                                style={{ float: "left", border: "none" }}
                                border={0}
                              />
                            </a>
                            &nbsp;
                            <a
                              href="http://instagram.com/username"
                              target="_blank"
                              style={{
                                fontSize: "11px",
                                color: "#444",
                                textDecoration: "none",
                              }}
                            >
                              <img
                                width={24}
                                height={24}
                                src="https://cdn.gifo.wisestamp.com/social/instagram/E4405F/48/0/background.png"
                                style={{ float: "left", border: "none" }}
                                border={0}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: "40%", paddingTop: "50px" }}>
        <tbody>
          <tr>
            <td>
              <div>
                <img src="images/men.jpg" />
              </div>
            </td>
            <td style={{ position: "relative", left: "-10px" }}>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  margin: 0,
                  width: "275px",
                  float: "left",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </td>
            <td style={{ position: "relative", left: "-54px" }}>
              <div style={{ paddingLeft: "-100px" }}>
                <div>
                  <a
                    href="#"
                    style={{
                      background: "#4267b2",
                      color: "#fff",
                      float: "left",
                      textDecoration: "none",
                      padding: "8px 14px 9px 19px",
                      width: "74px",
                    }}
                  >
                    Facebook
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    style={{
                      background:
                        "linear-gradient(to bottom,#9900ff 0%,#f16632 100%)",
                      float: "left",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "8px 14px 9px 19px",
                      width: "74px",
                    }}
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: "40%" }}>
        <tbody>
          <tr>
            <td>
              <span
                style={{ fontSize: "16px", margin: "5px 0 0 0", float: "left" }}
              >
                William Shakespeare quote......
              </span>
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    float: "left",
                    margin: "10px 0 0 0",
                  }}
                >
                  IMPORTANT: Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
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
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
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
              </div>
              <div>
                <img src="images/banner.png" alt="banner image" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Template21;
