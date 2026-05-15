import Image from "next/image";
import logo from "@/public/logo.svg";
import ic_chevron_down from "@/public/svgs/ic_chevron_down.svg";
import ic_copyright from "@/public/svgs/ic_copyright.svg";

const linksArr = [
  {
    title: "Product",
    links: ["Features", "How It Works", "Pricing", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Privacy Policy", "Terms of Service", "Contact"],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Image src={logo} alt="chattiphy_logo" width={32} height={32} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--white)' }}>Chattiphy</span>
          </div>
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <FooterNavigation style={{ width: '100%', justifyContent: 'space-between' }}>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <Translator>
              <h3>English (United Kingdom)</h3>
              <Image src={ic_chevron_down} alt="chevron down" />
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              Chattiphy. AI chatbot for your website.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
