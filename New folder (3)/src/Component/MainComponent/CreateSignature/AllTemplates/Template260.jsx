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

const Name = 'Jason Erickson'
const Company = ' Online marketer, JE marketing'
const Website = 'www.je-marketing.com'
const Address = 'Level 12, 69 Example Street, WA 6029'
const img =
  'https://y5t6h9a6.stackpathcdn.com/354b7a0d-1c58-4eea-bc71-49fc5b6e0a75/img.png'

const Template260 = () => {
  const { youtubeUrl } = useSelector(state => state.counter)
  const { fontsize } = useSelector(state => state.design)
  return (
    <div>
      <div style={{ margin: 'auto', marginTop: '2%' }}>
        <table style={{ padding: '0 5px 0 0', float: 'left' }}>
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
                  display: 'inline',
                  marginBottom: '10px',
                  float: 'left'
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
                  href
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '9.0px',
                    fontStyle: 'normal',
                    lineHeight: '10px',
                    fontWeight: 'normal',
                    color: '#777777',
                    marginTop: '10px',
                    float: 'left'
                  }}
                >
                  <SignatureComp />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{ float: 'left', marginLeft: '10px' }}></table>
        <table
          cellPadding={0}
          cellSpacing={0}
          width='100%;'
          style={{
            width: '60%',
            float: 'left',
            backgroundColor: '#1d76c8',
            lineHeight: '1.2',
            height: '65px'
          }}
          height={65}
        >
          <tbody>
            <tr>
              <td
                style={{
                  padding: '0 12px 10px',
                  verticalAlign: 'bottom',
                  lineHeight: '1.2'
                }}
                color='#ffffff'
              >
                {' '}
                <span
                  data-acs='title'
                  className='ws-tpl-title'
                  style={{
                    colorScheme: 'light only',
                    fontSize: '12px',
                    letterSpacing: '0px',
                    color: '#ffffff',
                    fontFamily: 'Arial',
                    textTransform: 'initial'
                  }}
                >
                  <CompanyComp Company={Company} />
                </span>{' '}
                <span
                  style={{
                    colorScheme: 'light only',
                    fontSize: '12px',
                    letterSpacing: '0px',
                    color: '#ffffff',
                    fontFamily: 'Arial',
                    textTransform: 'initial'
                  }}
                ></span>{' '}
                <br />
                <span
                  style={{
                    colorScheme: 'light only',
                    color: '#ffffff',
                    fontSize: '18.0px',
                    fontFamily: 'Arial',
                    fontWeight: 'bold'
                  }}
                >
                  <Namecom Name={Name} />
                </span>
                <br />{' '}
              </td>
            </tr>
          </tbody>
        </table>
        <table
          cellPadding={0}
          cellSpacing={0}
          style={{
            float: 'left',
            width: '60%',
            marginTop: '18px',
            marginBottom: '2px'
          }}
        >
          <tbody>
            <tr>
              <td style={{ lineHeight: '0%', paddingBottom: '6px' }}>
                <table
                  className='ws-tpl-phone'
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    lineHeight: '14px',
                    fontSize: '12px',
                    fontFamily: 'Arial'
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          colorScheme: 'light only',
                          fontFamily: 'Arial',
                          fontSize: '12px'
                        }}
                      >
                        {' '}
                        <a
                          href='tel:212-931-0000'
                          style={{
                            colorScheme: 'light only',
                            textDecoration: 'none',
                            fontSize: '12px',
                            fontFamily: 'Arial'
                          }}
                        >
                          {' '}
                          <span
                            style={{
                              lineHeight: '1.2',
                              colorScheme: 'light only',
                              color: '#212121',
                              fontFamily: 'Arial',
                              whiteSpace: 'nowrap',
                              fontSize: '12px'
                            }}
                          >
                            <PhoneComp />
                          </span>{' '}
                        </a>{' '}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ lineHeight: '0%', paddingBottom: '6px' }}>
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    lineHeight: '14px',
                    fontSize: '12px',
                    fontFamily: 'Arial'
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ padding: '0 6px' }}>
                        {' '}
                        <span
                          style={{
                            colorScheme: 'light only',
                            fontFamily: 'Arial',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            color: '#212121'
                          }}
                        >
                          {' '}
                        </span>{' '}
                      </td>
                      <td
                        style={{
                          colorScheme: 'light only',
                          fontFamily: 'Arial',
                          fontSize: '12px'
                        }}
                      >
                        {' '}
                        <a
                          href='#'
                          style={{
                            colorScheme: 'light only',
                            textDecoration: 'none',
                            fontSize: '12px',
                            fontFamily: 'Arial'
                          }}
                        >
                          {' '}
                          <span
                            style={{
                              lineHeight: '1.2',
                              colorScheme: 'light only',
                              color: '#212121',
                              fontFamily: 'Arial',
                              whiteSpace: 'nowrap',
                              fontSize: '12px'
                            }}
                          >
                            {' '}
                            <WebsiteComp Website={Website} />
                          </span>{' '}
                        </a>{' '}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ lineHeight: '0%', paddingBottom: '6px' }}>
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    lineHeight: '14px',
                    fontSize: '12px',
                    fontFamily: 'Arial'
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ padding: '0 6px' }}>
                        {' '}
                        <span
                          style={{
                            colorScheme: 'light only',
                            fontFamily: 'Arial',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            color: '#212121'
                          }}
                        >
                          {' '}
                        </span>{' '}
                      </td>
                      <td
                        style={{
                          colorScheme: 'light only',
                          fontFamily: 'Arial',
                          fontSize: '12px'
                        }}
                      >
                        {' '}
                        <a
                          href='mailto:jason@je-marketing.com '
                          style={{
                            colorScheme: 'light only',
                            textDecoration: 'none',
                            fontSize: '12px',
                            fontFamily: 'Arial'
                          }}
                        >
                          {' '}
                          <span
                            style={{
                              lineHeight: '1.2',
                              colorScheme: 'light only',
                              color: '#212121',
                              fontFamily: 'Arial',
                              whiteSpace: 'nowrap',
                              fontSize: '12px'
                            }}
                          >
                            {' '}
                            <EmailComp />
                          </span>{' '}
                        </a>{' '}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          cellPadding={0}
          cellSpacing={0}
          style={{ float: 'left', width: '60%' }}
        >
          <tbody>
            <tr>
              <td style={{ lineHeight: '0%', paddingBottom: '6px' }}>
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    lineHeight: '14px',
                    fontSize: '12px',
                    fontFamily: 'Arial'
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          colorScheme: 'light only',
                          fontFamily: 'Arial',
                          fontSize: '12px'
                        }}
                      >
                        {' '}
                        <a
                          href='#'
                          style={{
                            colorScheme: 'light only',
                            textDecoration: 'none',
                            fontSize: '12px',
                            fontFamily: 'Arial'
                          }}
                        >
                          {' '}
                          <span
                            data-acs='address'
                            style={{
                              lineHeight: '1.2',
                              colorScheme: 'light only',
                              color: '#212121',
                              fontFamily: 'Arial',
                              whiteSpace: 'nowrap',
                              fontSize: '12px'
                            }}
                          >
                            {' '}
                            <AddressComp Address={Address} />
                          </span>{' '}
                        </a>{' '}
                      </td>
                    </tr>
                  </tbody>
                  <tbody style={{ float: 'left', marginTop: '10px' }}>
                    <SocialComp />
                  </tbody>
                </table>
              </td>
            </tr>
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

export default Template260
