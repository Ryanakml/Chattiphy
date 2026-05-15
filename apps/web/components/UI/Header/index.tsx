"use client";

import Image from "next/image";
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from "./styles";
import logo from "@/public/logo.svg";
import ic_bars from "@/public/svgs/ic_bars.svg";
import GetStartedButton from "@/components/Common/GetStartedButton";
import AnimatedLink from "@/components/Common/AnimatedLink";
import { useState } from "react";
import { motion } from "framer-motion";
import { links, menu } from "./constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Image src={logo} alt="chattiphy_logo" priority width={32} height={32} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--white)' }}>Chattiphy</span>
          </div>
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? "open" : "closed"}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? "active" : ""}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} />
          ))}
        </Nav>
        <CallToActions className={isOpen ? "active" : ""}>
          <AnimatedLink title="Login" />
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
