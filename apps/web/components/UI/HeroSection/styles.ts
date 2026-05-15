"use client";
import * as styledComponents from "styled-components";
import Link from "next/link";

const styled =
  (styledComponents as any).styled ??
  (styledComponents as any).default?.styled ??
  (styledComponents as any).default;
import hero_background from "@/public/images/grid_background.png";

export const Wrapper = styled.section`
  margin-top: 6.25rem;
`;

export const Inner = styled.div`
  background: url(${hero_background.src}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
  background-position: top center;
  background-size: contain;
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid #989898;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;

  span {
    color: var(--light-gray);
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;

  h1 {
    font-size: 6rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: #bdbdbd;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    h1 {
      font-size: 2.5rem;
      font-weight: 400;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const Ctas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
  }
`;

export const SecondaryCta = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  border: 1px solid rgba(220, 220, 220, 0.45);
  color: var(--light-gray);
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  background: transparent;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(220, 220, 220, 0.7);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 18rem;
    font-size: 1rem;
  }
`;
