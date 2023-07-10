/* eslint-disable @next/next/no-img-element */

"use client"

import { dir } from 'i18next'
import "./layout.css"

import { useTranslation } from "@/app/i18n/client";
import { getFriendlyUrl } from '@/helpers/common';
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
  }) {

    const lng = 'es';

  const pathname = usePathname()

  const { t: tlayout } = useTranslation(lng, 'layout');
  const { t: tlngs } = useTranslation(lng, 'langs');

  const [isRotateRentIcon, setRotateRentIcon] = useState(false);
  const [isRotateUsIcon, setRotateUsIcon] = useState(false);
  const [isRotateServicesIcon, setRotateSevicesIcon] = useState(false);

  const toggleMobileMenu = () => {
    var mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
  }

  const toggleSubmenu = (selector, id) => {
    var submenu = document.getElementById(selector, id);
    //var submenuIcon = document.getElementById(id);
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
    if (id === 'submenu-icon-rent') {
      setRotateRentIcon(!isRotateRentIcon);
    } else if (id === 'submenu-icon-services') {
      setRotateSevicesIcon(!isRotateServicesIcon);

    } else {
      setRotateUsIcon(!isRotateUsIcon);
    }
  }

  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <div id="root">
          <div className="headerContent">
            <div className="header">
              <div className="logo">
                aaa {JSON.stringify(lng)}
                <img src="https://www.locabarcelona.com/wp-content/uploads/2021/07/logo_locabarcelona_small.png" alt="Logo" />
              </div>
              <div className="menu">

                <div className="rh_owners">
                  <a href={getFriendlyUrl(lng, 'owners')}>
                    <svg id="e3a0a58c-2620-4741-b9ed-ea0b3b6f42cf" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" className="rh_svg" viewBox="0 0 24 24" style={{ margin: '0 10px 0px 0' }}>
                      <defs></defs><path d="M22.92,6.2H18.75V3a.58.58,0,0,0-.58-.58H5.83A.58.58,0,0,0,5.25,3V6.2H1.08a.58.58,0,0,0-.58.58V21a.58.58,0,0,0,.58.58H5.83A.58.58,0,0,0,6.41,21V3.56H17.59V21a.58.58,0,0,0,.58.58h4.75A.58.58,0,0,0,23.5,21V6.78A.58.58,0,0,0,22.92,6.2ZM5.25,20.44H1.66V7.36H5.25Zm17.09,0H18.75V7.36h3.59Zm-7-5.7H8.68a.58.58,0,0,0,0,1.16h6.64a.58.58,0,0,0,0-1.16Zm-1,2.85H9.63a.58.58,0,0,0-.58.58V21a.58.58,0,0,0,.58.58A.57.57,0,0,0,10.2,21V18.75h3.59V21A.58.58,0,0,0,15,21V18.17A.58.58,0,0,0,14.37,17.59Zm1-5.69H8.68a.58.58,0,1,0,0,1.15h6.64a.58.58,0,1,0,0-1.15Zm0-5.7H8.68a.58.58,0,0,0,0,1.16h6.64a.58.58,0,0,0,0-1.16Zm0,2.85H8.68a.58.58,0,0,0,0,1.16h6.64a.58.58,0,0,0,0-1.16Z"></path></svg>
                    {tlayout('header-owners-link')}
                    <svg id="a2b2971a-4294-43b5-9dd3-c701ab24f097" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" className="rh_svg" viewBox="0 0 24 24">
                      <defs></defs><path d="M10.26,8.11l-.51.47a.18.18,0,0,0,0,.25L12.9,12,9.74,15.12a.19.19,0,0,0-.05.13.14.14,0,0,0,0,.12l.47.51a.18.18,0,0,0,.25,0l3.81-3.77a.18.18,0,0,0,.05-.12h0a.17.17,0,0,0-.05-.12L10.51,8.11a.18.18,0,0,0-.12,0A.15.15,0,0,0,10.26,8.11Z"></path></svg>
                  </a>
                </div>
                <div className="nav_social">
                  <ul>
                    <li className="iconHead"><a target="_blank" href="https://wa.me/34622169953"><img src="/layout/whatsap.png" alt="whatsap" /></a></li>
                    <li className="iconHead"><a target="_blank" href="https://www.locabarcelona.com/es/favoritos/"><img src="/layout/lovely.png" alt="favoritos" /></a></li>
                    <li className="iconHead"><a target="_blank" href="https://www.facebook.com/pages/LocaBarcelona/132015350171409"><img src="/layout/facebook.png" alt="Facebook" /></a></li>
                    <li className="iconHead"><a target="_blank" href="https://www.instagram.com/loca_barcelona_realestate/"><img src="/layout/instagram.png" alt="Instagram" /></a></li>
                    <li className="iconHead"><a target="_blank" href="https://www.linkedin.com/company/10567432/"><img src="/layout/linkedin.png" alt="Linkedin" /></a></li>
                    <li className="iconHead"><a target="_blank" href="https://www.youtube.com/channel/UCWjS_Pk0EOUYSkVERs9BMwg"><img src="/layout/youtube.png" alt="Youtube" /></a></li>
                    <li className="iconHead">
                      <div className="contentChangeLang" >
                        <img className="flag" src={"https://www.locabarcelona.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/" + lng + ".png"} alt="" />
                        <span>{tlngs(lng)}</span>
                        <ul className="menuLang">
                          {lng !== 'en' &&
                            <li>
                              <img className="flag" src="https://www.locabarcelona.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png" alt="" />
                              <a href={pathname.replace(lng, "en")}><span>{tlngs("en")}</span> </a>
                            </li>
                          }
                          {lng !== 'es' &&
                            <li>
                              <img className="flag" src="https://www.locabarcelona.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png" alt="" />
                              <a href={pathname.replace(lng, "es")}><span>{tlngs("es")}</span> </a>
                            </li>
                          }
                          {lng !== 'fr' &&
                            <li>
                              <img className="flag" src="https://www.locabarcelona.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/fr.png" alt="" />
                              <a href={pathname.replace(lng, "fr")}><span>{tlngs("fr")}</span> </a>
                            </li>
                          }
                          {lng !== 'ca' &&
                            <li>
                              <img className="flag" src="https://www.locabarcelona.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/ca.png" alt="" />
                              <a href={pathname.replace(lng, "ca")}><span>{tlngs("ca")}</span> </a>
                            </li>
                          }
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="contentMenu">
                  <ul className="menuGeneral">
                    <li className="firstMenu"><a href="#" className="linkMenu">{tlayout("header-rentals-title")}</a>
                      <div className="submenu">
                        <ul className="submenuP">
                          <li><a href={getFriendlyUrl(lng, 'short_term_rent')}>{tlayout("header-shortterm_rentals-link")}</a></li>
                          <li><a href={getFriendlyUrl(lng, 'long_term_rent')}>{tlayout("header-longterm_rentals-link")}</a></li>
                          <li><a href={getFriendlyUrl(lng, 'tourist_rental')}>{tlayout("header-tourism-link")}</a></li>
                        </ul>
                      </div>
                    </li>
                    <li><a className="linkMenu" href={getFriendlyUrl(lng, 'sales')}>{tlayout("header-sales-link")}</a></li>
                    <li><a className="linkMenu" href={getFriendlyUrl(lng, 'blog')}>{tlayout("header-blog-link")}</a></li>
                    <li><a href="#" className="linkMenu">{tlayout("header-about_us-title")}</a>
                      <div className="submenu">
                        <ul className="submenuP">
                          <li><a href="#">{tlayout("header-services-title")}</a>
                            <div className="submenu2">
                              <ul>
                                <li><a href={getFriendlyUrl(lng, 'services_short_term_rent')}>{tlayout("header-services_shortterm-link")}</a></li>
                                <li><a href={getFriendlyUrl(lng, 'services_long_term_rent')}>{tlayout("header-services_longterm-link")}</a></li>
                                <li><a href={getFriendlyUrl(lng, 'services_tourist_rental')}>{tlayout("header-services_tourism-link")}</a></li>
                                <li><a href={getFriendlyUrl(lng, 'services_sales')}>{tlayout("header-services_sales-link")}</a></li>
                                <li><a href={getFriendlyUrl(lng, 'services_insurance')}>{tlayout("header-services_insurance-link")}</a></li>
                              </ul>
                            </div>
                          </li>
                          <li><a href={getFriendlyUrl(lng, 'contact_us')}>{tlayout("header-contactus-link")}</a></li>
                          <li><a href={getFriendlyUrl(lng, 'team')}>{tlayout("header-team-link")}</a></li>
                          <li><a href={getFriendlyUrl(lng, 'join_us')}>{tlayout("header-workwithus-link")}</a></li>
                          <li><a href={getFriendlyUrl(lng, 'partners')}>{tlayout("header-partners-links")}</a></li>
                          <li><a href={getFriendlyUrl(lng, 'faqs')}>{tlayout("header-faqs-link")}</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="menu-toggle" onClick={toggleMobileMenu}>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu" id="mobile-menu" >
            <div className="content_top_header_mobile">
              <div className="logoMobile">
                <img src="https://www.locabarcelona.com/wp-content/uploads/2021/08/logo_mobile_menu.png" alt="Loca Barcelona" />
              </div>
              <div className="content-toggle_close-mobile"  >
                <div className="content_close_hamb">
                  <div className="hamburger-box">
                    <div className="close" onClick={toggleMobileMenu}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="content_mobilelng">
                <ul className="mobile_lng">
                  <li><a href={pathname.replace(lng, "en")}>{tlngs("en")}</a></li>
                  <li><a href={pathname.replace(lng, "fr")}>{tlngs("fr")}</a></li>
                  <li><a href={pathname.replace(lng, "es")}>{tlngs("es")}</a></li>
                  <li><a href={pathname.replace(lng, "ca")}>{tlngs("ca")}</a></li>
                </ul>
              </div>
              <ul className="menu_mobile_vert">
                <li>{tlayout("header-rentals-title")}<span d="submenu-icon-rent" className={`submenu-icon ${isRotateRentIcon ? 'rotate' : ''}`} onClick={() => { toggleSubmenu('submenuRent', 'submenu-icon-rent') }}></span>
                  <div className="submenuMobile">
                    <ul className="submenuRent" id="submenuRent">
                      <li><a href={getFriendlyUrl(lng, 'short_term_rent')}>{tlayout("header-shortterm_rentals-link")}</a></li>
                      <li><a href={getFriendlyUrl(lng, 'long_term_rent')}>{tlayout("header-longterm_rentals-link")}</a></li>
                      <li><a href={getFriendlyUrl(lng, 'tourist_rental')}>{tlayout("header-tourism-link")}</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href={getFriendlyUrl(lng, 'sales')}>{tlayout("header-sales-link")}</a></li>
                <li><a href={getFriendlyUrl(lng, 'blog')}>{tlayout("header-blog-link")}</a></li>
                <li>{tlayout("header-about_us-title")}<span id="submenu-icon-us" className={`submenu-icon ${isRotateUsIcon ? 'rotate' : ''}`} onClick={() => { toggleSubmenu('submenuUs', 'submenu-icon-us') }}></span>
                  <div className="submenuMobile">
                    <ul className="submenuUs" id="submenuUs">
                      <li>{tlayout("header-services-title")}<span id="submenu-icon-services" className={`submenu-icon ${isRotateServicesIcon ? 'rotate' : ''}`} onClick={() => { toggleSubmenu('submenuService', 'submenu-icon-services') }}></span>
                        <div className="submenuMobile">
                          <ul className="submenuService" id="submenuService">
                            <li><a href={getFriendlyUrl(lng, 'services_short_term_rent')}>{tlayout("header-services_shortterm-link")}</a></li>
                            <li><a href={getFriendlyUrl(lng, 'services_long_term_rent')}>{tlayout("header-services_longterm-link")}</a></li>
                            <li><a href={getFriendlyUrl(lng, 'services_tourist_rental')}>{tlayout("header-services_tourism-link")}</a></li>
                            <li><a href={getFriendlyUrl(lng, 'services_sales')}>{tlayout("header-services_sales-link")}</a></li>
                            <li><a href={getFriendlyUrl(lng, 'services_insurance')}>{tlayout("header-services_insurance-link")}</a></li>
                          </ul>
                        </div>
                      </li>
                      <li><a href={getFriendlyUrl(lng, 'contact_us')}>{tlayout("header-contactus-link")}</a></li>
                      <li><a href={getFriendlyUrl(lng, 'team')}>{tlayout("header-team-link")}</a></li>
                      <li><a href={getFriendlyUrl(lng, 'join_us')}>{tlayout("header-workwithus-link")}</a></li>
                      <li><a href={getFriendlyUrl(lng, 'partners')}>{tlayout("header-partners-links")}</a></li>
                      <li><a href={getFriendlyUrl(lng, 'faqs')}>{tlayout("header-faqs-link")}</a></li>
                    </ul>
                  </div>
                </li>

              </ul>
            </div>
            <div className="rh_menu__responsive_bottom">
              <div className="content_link_owner_mobile"><a href={getFriendlyUrl(lng, 'owners')} target="_blank">{tlayout('header-owners-link')}</a> </div>

              <div className="nav_social_footer_mobile">
                <div className="iconHead"><a target="_blank" href="https://wa.me/34622169953"><img className="iconNavSocial" src="/layout/whatsap.png" alt="whatsap" /></a></div>
                <div className="iconHead"><a target="_blank" href="https://www.locabarcelona.com/es/favoritos/"><img className="iconNavSocial" src="/layout/lovely.png" alt="favoritos" /></a></div>
                <div className="iconHead"><a target="_blank" href="https://www.facebook.com/pages/LocaBarcelona/132015350171409"><img className="iconNavSocial" src="/layout/facebook.png" alt="facebook" /></a></div>
                <div className="iconHead"><a target="_blank" href="https://www.instagram.com/loca_barcelona_realestate/"><img className="iconNavSocial" src="/layout/instagram.png" alt="Instagram" /></a></div>
                <div className="iconHead"><a target="_blank" href="https://www.linkedin.com/company/10567432/"><img className="iconNavSocial" src="/layout/linkedin.png" alt="Linkedin" /></a></div>
                <div className="iconHead"><a target="_blank" href="https://www.youtube.com/channel/UCWjS_Pk0EOUYSkVERs9BMwg"><img className="iconNavSocial" src="/layout/youtube.png" alt="Youtube" /></a></div>
              </div>
            </div>
          </div>
          <div className="page-container">{children}</div>
          <div className="contentFooter">
            <footer className="App-footer">
              <div className="content-logo-Footer">
                <img className="logoFooter" src="http://www.locabarcelona.com/wp-content/uploads/2021/04/logo_locabarcelona_footer.png" alt="Loca Barcelona" />
              </div>
              <div className="textFooter">
                <p>{tlayout('footer-enterprise-info')}</p>
              </div>
              <div className="rh_footer_left_menu">
                <div className="footer_block_menu">
                  <p>{tlayout('footer-usefull_links-title')}</p>
                  <ul className="footer_list">
                    <li><a href={getFriendlyUrl(lng, 'contact_us')}>{tlayout('footer-contact_us-link')}</a></li>
                    <li><a href={getFriendlyUrl(lng, 'faqs')}>{tlayout('footer-faqs-link')}</a></li>
                    <li><a href={getFriendlyUrl(lng, 'join_us')}>{tlayout('footer-work_with_us-link')}</a></li>
                    <li><a href={getFriendlyUrl(lng, 'partners')}>{tlayout('footer-partners-link')}</a></li>
                    <li><a href={getFriendlyUrl(lng, 'team')}>{tlayout('footer-the_team-link')}</a></li>
                  </ul>
                </div>
                <div className="footer_block_menu">
                  <p>{tlayout('footer-legal_notice-title')}</p>
                  <ul className="footer_list">
                    <li><a href={getFriendlyUrl(lng, 'cookies_policy')}>{tlayout('footer-cookies_policy-link')}</a></li>
                    <li><a href={getFriendlyUrl(lng, 'privacy_policy')}>{tlayout('footer-privacy_policy-link')}</a></li>
                    <li><a href={getFriendlyUrl(lng, 'terms_of_use')}>{tlayout('footer-terms_of_use-link')}</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer_nav_social_content" >
                <div className="footer_nav_social">
                  <div className="iconHead"><a target="_blank" href="https://wa.me/34622169953" rel="noreferrer"><img src="/layout/whatsap_w.png" alt="whatsap" /></a></div>
                  <div className="iconHead"><a target="_blank" href="https://www.locabarcelona.com/es/favoritos/" rel="noreferrer"><img src="/layout/lovely_w.png" alt="favoritos" /></a></div>
                  <div className="iconHead"><a target="_blank" href="https://www.facebook.com/pages/LocaBarcelona/132015350171409" rel="noreferrer"><img src="/layout/facebook_w.png" alt="Facebook" /></a></div>
                  <div className="iconHead"><a target="_blank" href="https://www.instagram.com/loca_barcelona_realestate/" rel="noreferrer"><img src="/layout/instagram_w.png" alt="Instagram" /></a></div>
                  <div className="iconHead"><a target="_blank" href="https://www.linkedin.com/company/10567432/" rel="noreferrer"><img src="/layout/linkedin_w.png" alt="Linkedin" /></a></div>
                  <div className="iconHead"><a target="_blank" href="https://www.youtube.com/channel/UCWjS_Pk0EOUYSkVERs9BMwg" rel="noreferrer"><img src="/layout/youtube_w.png" alt="Youtube" /></a></div>
                </div>
                <p className="addresFooter" >{tlayout('footer-street-office-address')}</p>
                <p className="addresFooter" >{tlayout('footer-cp-office-address')}</p>
                <p className="addresFooter" >{tlayout('footer-all_rights_reserved-address')}</p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
