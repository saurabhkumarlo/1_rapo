import React from 'react'
import { useSelector } from 'react-redux'
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
  SignatureComp
} from '.'

const Name = 'HENRY JONES'
const Company = ' Dentist'
const Website = 'www.je-marketing.com'
const Address = 'Level 12, 69 Example Street, WA 6029'
const img =
  'https://y5t6h9a6.stackpathcdn.com/118d0b4e-2252-47be-b614-2a255129d4a3/img.png'

const Template312 = () => {
  const { youtubeUrl } = useSelector(state => state.counter)
  const { fontsize } = useSelector(state => state.design)
  return (
    <div>
      <div style={{ margin: 'auto', marginTop: '2%' }}>
        <table style={{ padding: '0 0', float: 'left', width: '100%' }}>
          <tbody
            style={{
              borderBottom: '2px solid #007fe6',
              marginBottom: '15px',
              width: '69%',
              float: 'left',
              padding: '0px 0 10px 0'
            }}
          >
            <tr>
              <td>
                <span
                  style={{
                    fontFamily: 'Palatino, "Palatino Linotype", serif',
                    fontSize: '28.0px',
                    fontStyle: 'normal',
                    lineHeight: '30px',
                    fontWeight: 700,
                    color: '#007fe6',
                    display: 'inline'
                  }}
                >
                  <Namecom Name={Name} />

                  <span
                    style={{
                      fontFamily: 'Palatino, "Palatino Linotype", serif',
                      fontSize: '23.0px',
                      fontStyle: 'normal',
                      lineHeight: '25px',
                      fontWeight: 700,
                      color: '#2e2e2e',
                      display: 'inline',
                      margin: '0 0 0 7px'
                    }}
                  >
                    <CompanyComp Company={Company} />
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{ padding: '0 0', float: 'left' }}>
          <tbody>
            <tr>
              <td
                style={{
                  fontFamily: 'Calibri, Helvetica, sans-serif',
                  fontSize: '15.0px',
                  fontStyle: 'normal',
                  lineHeight: '17px',
                  fontWeight: 400,
                  color: '#000000',
                  display: 'inline'
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
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '9.0px',
                  fontStyle: 'normal',
                  lineHeight: '10px',
                  fontWeight: 'normal',
                  color: '#777777'
                }}
              >
                <a
                  href=''
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '9.0px',
                    fontStyle: 'normal',
                    lineHeight: '10px',
                    fontWeight: 'normal',
                    color: '#777777'
                  }}
                >
                  <SignatureComp />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{ float: 'left', marginLeft: '10px' }}>
          <tbody>
            <tr>
              <td
                style={{
                  borderCollapse: 'collapse',
                  fontFamily: 'Calibri, Helvetica, sans-serif',
                  fontSize: '15.0px',
                  fontStyle: 'normal',
                  lineHeight: '17px',
                  fontWeight: 400,
                  padding: 0
                }}
              >
                <span
                  style={{
                    fontFamily: 'Calibri, Helvetica, sans-serif',
                    fontSize: '15.0px',
                    fontStyle: 'normal',
                    lineHeight: '17px',
                    fontWeight: 400,
                    color: '#008bb8',
                    display: 'inline',
                    fontSize: fontsize === 1 ? '15px' : `${fontsize / 5 + 15}px`
                  }}
                >
                  Phone.
                </span>
                <span
                  style={{
                    fontFamily: 'Calibri, Helvetica, sans-serif',
                    fontSize: '15.0px',
                    fontStyle: 'normal',
                    lineHeight: '17px',
                    fontWeight: 400,
                    color: '#000000',
                    display: 'inline'
                  }}
                >
                  <PhoneComp />
                  &nbsp;
                </span>
                <span
                  style={{
                    fontFamily: 'Calibri, Helvetica, sans-serif',
                    fontSize: '15.0px',
                    fontStyle: 'normal',
                    lineHeight: '17px',
                    fontWeight: 400,
                    color: '#008bb8',
                    display: 'inline',
                    fontSize: fontsize === 1 ? '15px' : `${fontsize / 5 + 15}px`
                  }}
                >
                  Mobile.
                </span>
                <span
                  style={{
                    fontFamily: 'Calibri, Helvetica, sans-serif',
                    fontSize: '15.0px',
                    fontStyle: 'normal',
                    lineHeight: '17px',
                    fontWeight: 400,
                    color: '#000000',
                    display: 'inline'
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
                  borderCollapse: 'collapse',
                  fontFamily: 'Calibri, Helvetica, sans-serif',
                  fontSize: '15.0px',
                  fontStyle: 'normal',
                  lineHeight: '17px',
                  fontWeight: 400,
                  padding: 0
                }}
              >
                <span
                  style={{
                    fontFamily: 'Calibri, Helvetica, sans-serif',
                    fontSize: '15.0px',
                    fontStyle: 'normal',
                    lineHeight: '17px',
                    fontWeight: 400,
                    color: '#008bb8',
                    display: 'inline',
                    fontSize: fontsize === 1 ? '15px' : `${fontsize / 5 + 15}px`
                  }}
                >
                  Web.
                </span>
                <span
                  style={{
                    fontFamily: 'Calibri, Helvetica, sans-serif',
                    fontSize: '15.0px',
                    fontStyle: 'normal',
                    lineHeight: '17px',
                    fontWeight: 400,
                    color: '#000000',
                    display: 'inline'
                  }}
                >
                  <WebsiteComp Website={Website} />
                </span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderCollapse: 'collapse',
                  fontFamily: 'Calibri, Helvetica, sans-serif',
                  fontSize: '15.0px',
                  fontStyle: 'normal',
                  lineHeight: '17px',
                  fontWeight: 400,
                  padding: 0
                }}
              >
                <span
                  style={{
                    fontFamily: 'Calibri, Helvetica, sans-serif',
                    fontSize: '15.0px',
                    fontStyle: 'normal',
                    lineHeight: '17px',
                    fontWeight: 400,
                    color: '#008bb8',
                    display: 'inline',
                    fontSize: fontsize === 1 ? '15px' : `${fontsize / 5 + 15}px`
                  }}
                >
                  Address.
                </span>
                <span
                  style={{
                    fontFamily: 'Calibri, Helvetica, sans-serif',
                    fontSize: '15.0px',
                    fontStyle: 'normal',
                    lineHeight: '17px',
                    fontWeight: 400,
                    color: '#000000',
                    display: 'inline'
                  }}
                >
                  <AddressComp Address={Address} />
                </span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderCollapse: 'collapse',
                  paddingBottom: '3px',
                  height: '3px'
                }}
              ></td>
            </tr>
            <tr>
              <td
                style={{
                  borderCollapse: 'collapse',
                  paddingBottom: '4px',
                  height: '4px'
                }}
              />
            </tr>
          </tbody>
          <tbody>
            <SocialComp />
          </tbody>
        </table>
        <table style={{ float: 'left', width: '100%', marginTop: '10px' }}>
          <tbody>
            <tr>
              <td style={{ float: 'left' }}>
                <VideoComp />
                <div style={{ float: youtubeUrl ? 'right' : 'left' }}>
                  <div className='grid grid-cols-2 gap-1'>
                    <WedgitsSocialComp />
                  </div>
                </div>
              </td>
              <td style={{ float: 'left' }}>
                <span
                  style={{
                    fontSize: '16px',
                    margin: '5px 0 0 0',
                    float: 'left'
                  }}
                >
                  <QuoteComp />
                </span>
                <p
                  style={{
                    fontSize: '15PX',
                    float: 'left',
                    margin: '10px 0 0 0'
                  }}
                >
                  <Disclamer />
                </p>
                <a
                  href='#'
                  style={{
                    float: 'left',
                    color: '#000',
                    margin: '13px 0 0 0',
                    fontSize: '17px',
                    padding: '8px 18px 8px 18px',
                    borderRadius: '4px',
                    textDecoration: 'none'
                  }}
                >
                  <VideoConfComp />
                </a>
                <CTAComp />
              </td>
              <td style={{ float: 'left' }}>
                <p style={{ color: '#2b9a2b', fontSize: '18px' }}>
                  <GreenMsgComp />
                </p>
                <BannerComp />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Template312
