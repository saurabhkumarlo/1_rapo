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
  "https://y5t6h9a6.stackpathcdn.com/a0eaf591-8559-4b09-8a0b-57b0e1c8b7ae/img.png";
const Template340 = () => {
  const { youtubeUrl, email } = useSelector((state) => state.counter);
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
              <td style={{ paddingBottom: "12px" }}>
                {" "}
                <span
                  className="ws-tpl-title"
                  style={{
                    fontSize: "13.200000000000001px",
                    letterSpacing: "0px",
                    fontFamily: "Arial",
                    textTransform: "initial",
                    fontWeight: "bold",
                    color: "#666",
                  }}
                  data-acs="title"
                >
                  {" "}
                  <SignatureComp />
                </span>{" "}
                <br />
                <span
                  className="ws-tpl-name"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "15.600000000000001px",
                    color: "#2d77ff",
                    textTransform: "initial",
                    fontWeight: "bold",
                  }}
                  data-acs="name"
                >
                  {" "}
                  <Namecom Name={Name} />
                </span>{" "}
              </td>
            </tr>
          </tbody>
          <tbody style={{ margin: "4px 0 0 0", float: "left" }}>
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
                          color: "#45668E",
                        }}
                      >
                        {" "}
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                        />{" "}
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
                          colorScheme: "light only",
                          fontFamily: "Arial",
                          fontWeight: "bold",
                          fontSize: "12px",
                          color: "#45668E",
                        }}
                      >
                        {" "}
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                        />{" "}
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
                          colorScheme: "light only",
                          fontFamily: "Arial",
                          fontWeight: "bold",
                          fontSize: "12px",
                          color: "#45668E",
                        }}
                      >
                        {" "}
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                        />{" "}
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
                              fontSize: "12px",
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
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                        />{" "}
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
                          href="https://maps.google.com/?q=1937 Fieldcrest Road, NY 10011"
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
        <table style={{ float: "left", width: "100%" }}>
          <tbody>
            <tr>
              <td
                style={{
                  backgroundColor: "#2d77ff",
                  padding: "12px 6px",
                  lineHeight: "0%",
                }}
              >
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ lineHeight: "1.2", float: "right" }}
                  align="right"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table border={0} cellPadding={0} cellSpacing={0}>
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
                        <div style={{ height: "1px!important" }} />
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
    </div>
  );
};

export default Template340;
