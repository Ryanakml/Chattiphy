"use client";
import * as styledComponents from "styled-components";

const styled =
  (styledComponents as any).styled ??
  (styledComponents as any).default?.styled ??
  (styledComponents as any).default;

export const Wrapper = styled.section`
  padding-top: 7.5rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 7.38rem;

  h3 {
    color: var(--emerald);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const HeaderMainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 7.77rem;
  width: 100%;
  min-height: 26rem;
  overflow: visible;

  @media (max-width: 768px) {
    min-height: 20rem;
    margin-bottom: 5rem;
  }
`;

export const LeftImage = styled.div`
  width: 21.875rem;
  height: 13.875rem;
  transform: rotate(270deg);
  position: absolute;
  top: 64px;
  left: 26%;
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  &.active {
    transform: rotate(70.281deg) translate(-50%, 60%);
    top: 60%;
  }

  @media (max-width: 768px) {
    width: 14rem;
    height: 8.9rem;
    left: 16%;
    top: 48px;
  }
`;

export const MiddleImage = styled.div`
  position: relative;
  z-index: 3;
  cursor: pointer;
  width: 13.875rem;
  height: 21.9375rem;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 15.8rem;
  }
`;

export const RightImage = styled.div`
  width: 21.875rem;
  height: 13.875rem;
  transform: rotate(90deg);
  top: 65px;
  right: 26%;
  position: absolute;
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  &.active {
    transform: rotate(-70.281deg) translate(50%, 60%);
    top: 60%;
  }

  @media (max-width: 768px) {
    width: 14rem;
    height: 7.7rem;
    right: 16%;
    top: 48px;
  }
`;
