"use client";
import Image from "next/image";
import future_banner from "@/public/images/future_banner.png";
import future_mobile_banner from "@/public/images/future_mobile_banner.png";
import {
  Wrapper,
  Inner,
  Header,
  CardContainer,
  Card,
  TextCtn,
  SVGCtn,
  Stats,
  Stat,
  Banner,
} from "./styles";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "@/libs/useIsMobile";
import {
  cardsInfo,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
  stats,
} from "./constants";

const FinancialFuture = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
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
        </Header>
        <CardContainer>
          {cardsInfo.map((info, i) => (
            <Card key={i}>
              <TextCtn>
                <MaskText phrases={new Array(info.title)} tag="h3" />
                <MaskText phrases={new Array(info.details)} tag="p" />
              </TextCtn>
              <SVGCtn>
                <Image src={info.icon} alt="icon" />
              </SVGCtn>
            </Card>
          ))}
        </CardContainer>
        <Stats>
          {stats.map((stat, i) => (
            <Stat key={i}>
              <MaskText phrases={new Array(stat.number)} tag="h1" />
              <MaskText phrases={new Array(stat.subtitle)} tag="p" />
            </Stat>
          ))}
        </Stats>
      </Inner>
      <Banner>
        {isMobile ? (
          <Image src={future_mobile_banner} alt="future_banner" fill />
        ) : (
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
            alt="future_banner"
            fill
            sizes="(max-width: 768px) 100vw, 42rem"
            style={{ objectFit: 'cover' }}
          />
        )}
      </Banner>
    </Wrapper>
  );
};

export default FinancialFuture;
