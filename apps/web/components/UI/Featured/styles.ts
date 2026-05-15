"use client";
import { motion } from "framer-motion";
import { keyframes } from "styled-components";
import * as styledComponents from "styled-components";

type StyledFn = typeof import("styled-components").styled;
type StyledModule = {
  styled?: StyledFn;
  default?: StyledFn | { styled?: StyledFn };
};

const styledModule = styledComponents as unknown as StyledModule;
const styled = (styledModule.styled ??
  (typeof styledModule.default === "function"
    ? styledModule.default
    : styledModule.default?.styled)) as StyledFn;

const marquee = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
`;

export const Wrapper = styled.section``;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6.25rem auto 0;
  max-width: 1440px;
  width: 90%;

  h2 {
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 6.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 5rem;

    h2 {
      font-size: 1rem;
      font-weight: 500;
      margin-top: 3.75rem;
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: 85rem;
  margin: 0 auto;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.75rem;

  img {
    object-fit: cover;
    border-radius: 0.75rem;
  }

  @media (max-width: 768px) {
    border-radius: 0.5rem;

    img {
      border-radius: 0.5rem;
    }
  }
`;

export const ParallaxImages = styled.div`
  position: relative;
  width: 100%;
  max-width: 78rem;
  margin: 3.5rem auto 0;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 2.25rem;
  }
`;

export const LogoTrack = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  animation: ${marquee} 22s linear infinite;
  will-change: transform;
`;

export const LogoStrip = styled.div`
  flex: 0 0 auto;
  width: min(72rem, 100vw);
  display: flex;
  justify-content: center;
  padding-right: 5rem;

  img {
    display: block;
    width: min(72rem, 100%);
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 100vw;
    padding-right: 2.5rem;

    img {
      width: 100%;
    }
  }
`;

export const Div = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 35rem;
  overflow: hidden;

  @media (max-width: 599px) {
    height: 23.75rem;
  }
`;
