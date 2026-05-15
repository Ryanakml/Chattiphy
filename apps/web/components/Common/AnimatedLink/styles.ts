"use client";
import { motion } from "framer-motion";
import * as styledComponents from "styled-components";

const styled =
  (styledComponents as any).styled ??
  (styledComponents as any).default?.styled ??
  (styledComponents as any).default;

export const Div = styled(motion.div)`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Word = styled(motion.span)`
  white-space: nowrap;
  position: relative;
`;

export const Span = styled(motion.span)`
  position: relative;
  display: inline-block;
  white-space: nowrap;
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;

  @media (max-width: 768px) {
    color: var(--Background);
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  top: 0;
`;
