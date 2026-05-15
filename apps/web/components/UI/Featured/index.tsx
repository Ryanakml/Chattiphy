"use client";
import Image from "next/image";
import big_banner from "@/public/images/big_banner.png";
import featured_mobile_banner from "@/public/images/featured_mobile_banner.png";
import companies_image from "@/public/images/companies.png";
import {
  Wrapper,
  Inner,
  ImageContainer,
  ParallaxImages,
  LogoTrack,
  LogoStrip,
  Div,
} from "./styles";
import RevealCover from "@/components/Common/RevealCover";
import { useIsMobile } from "@/libs/useIsMobile";
export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2070"
                alt="featured_mobile_banner"
                fill
                sizes="(max-width: 768px) 100vw, 85rem"
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
                alt="big_banner"
                fill
                sizes="(max-width: 768px) 100vw, 85rem"
                style={{ objectFit: 'cover' }}
              />
            )}
          </Div>
        </ImageContainer>
        <h2>Works with any platform</h2>
        <ParallaxImages>
          <LogoTrack>
            <LogoStrip>
               <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', color: '#888', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  <span>WORDPRESS</span>
                  <span>SHOPIFY</span>
                  <span>WEBFLOW</span>
                  <span>WIX</span>
                  <span>FRAMER</span>
                  <span>SQUARESPACE</span>
               </div>
            </LogoStrip>
            <LogoStrip aria-hidden="true">
               <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', color: '#888', fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '4rem' }}>
                  <span>WORDPRESS</span>
                  <span>SHOPIFY</span>
                  <span>WEBFLOW</span>
                  <span>WIX</span>
                  <span>FRAMER</span>
                  <span>SQUARESPACE</span>
               </div>
            </LogoStrip>
          </LogoTrack>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
