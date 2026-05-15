"use client";
import {
  Wrapper,
  Inner,
  Pill,
  HeroTextContainer,
  Ctas,
  SecondaryCta,
} from "./styles";
import GetStartedButton from "@/components/Common/GetStartedButton";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "@/libs/useIsMobile";
import {
  badgeText,
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from "./constants";

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <Pill>
          <span>{badgeText}</span>
        </Pill>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" />
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" />
              <MaskText phrases={paragraphPhrases} tag="p" />
            </>
          )}
        </HeroTextContainer>
        <Ctas>
          <GetStartedButton padding="1rem 2rem" />
          <SecondaryCta href="#how-it-works">See how it works</SecondaryCta>
        </Ctas>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
