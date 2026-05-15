"use client";
import * as styledComponents from "styled-components";

const styled =
  (styledComponents as any).styled ??
  (styledComponents as any).default?.styled ??
  (styledComponents as any).default;
import grid_background from "@/public/images/offer_card_grid_1.png";

export const Wrapper = styled.section``;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 12.38rem auto 0;

  @media (max-width: 768px) {
    margin-top: 6.44rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 6.75rem;

  .section-label {
    color: var(--link-color);
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: #989898;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    .section-label {
      font-size: 0.75rem;
    }

    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const ImageCtn = styled.div`
  margin: 2rem auto 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14rem;
  width: 100%;
  z-index: 1;

  img {
    width: 10rem;
    height: 10rem;
    object-fit: contain;
    filter: brightness(0.7) sepia(1) hue-rotate(200deg) saturate(2); /* Give them a subtle blue/purple tint */
    opacity: 0.6;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    margin: 1rem auto 0;
    height: 10rem;

    img {
      width: 7rem;
      height: 7rem;
    }
  }
`;

export const TextCtn = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: auto;
  position: relative;
  z-index: 2;
  background: linear-gradient(180deg, rgba(19, 19, 19, 0) 0%, #131313 100%);

  h2 {
    font-size: 1.85rem;
    font-weight: 500;
    line-height: 1.2;
    color: var(--white);
  }

  p {
    color: #989898;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Offers = styled.div`
  display: flex;
  align-items: stretch;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const OfferCard = styled.div`
  overflow: hidden;
  position: relative;
  min-height: 28rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  background: #131313;
  flex: 1;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
    
    ${ImageCtn} img {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }

  &:first-child {
    flex: 1.6;
  }
`;
