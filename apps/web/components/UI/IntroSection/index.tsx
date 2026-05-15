"use client";
import { useState } from "react";
import Image from "next/image";
import { Edge, Edges, Title } from "../FinancialFreedom/styles";
import lola_card from "@/public/images/lola_card.png";
import orange_card from "@/public/images/orange_card.png";
import terry_card from "@/public/images/terry_card.png";

// I'll replace the Image src directly in the render logic to use URLs for now if they look better, 
// but since they are styled as cards, I'll stick to the original variables if they are used as background or something.
// Actually, I'll just change the src in the map.
import {
  Wrapper,
  Inner,
  Header,
  HeaderMainText,
  CardsContainer,
  LeftImage,
  MiddleImage,
  RightImage,
} from "./styles";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "@/libs/useIsMobile";
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from "./constants";

const IntroSection = () => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h3>Introducing</h3>
          <HeaderMainText>
            {isMobile ? (
              <>
                <MaskText phrases={mobileHeaderPhrase} tag="h1" />
                <MaskText phrases={mobileParagraphPhrase} tag="p" />
              </>
            ) : (
              <>
                <MaskText phrases={desktopHeaderPhrase} tag="h1" />
                <MaskText phrases={desktopParagraphPhrase} tag="p" />
              </>
            )}
          </HeaderMainText>
        </Header>
        <CardsContainer>
          <LeftImage
            className={isHovered ? "active" : ""}
          >
            <Image 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2070" 
              alt="Deploy Settings" 
              width={400} 
              height={250} 
              priority 
              style={{ borderRadius: '12px', objectFit: 'cover' }}
            />
          </LeftImage>
          <MiddleImage
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070" 
              alt="Bot Configuration" 
              width={400} 
              height={250} 
              priority 
              style={{ borderRadius: '12px', objectFit: 'cover' }}
            />
          </MiddleImage>
          <RightImage
            className={isHovered ? "active" : ""}
          >
            <Image 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
              alt="Conversations Monitor" 
              width={400} 
              height={250} 
              priority 
              style={{ borderRadius: '12px', objectFit: 'cover' }}
            />
          </RightImage>
        </CardsContainer>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                <Image src={edge.icon} alt="icon" />
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
      </Inner>
    </Wrapper>
  );
};

export default IntroSection;
