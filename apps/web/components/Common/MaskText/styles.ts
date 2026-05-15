"use client";
import * as styledComponents from "styled-components";

const styled =
  (styledComponents as any).styled ??
  (styledComponents as any).default?.styled ??
  (styledComponents as any).default;

export const Body = styled.div`
  h1,
  p {
  }
`;

export const LineMask = styled.div`
  overflow: hidden;
`;
