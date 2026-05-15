"use client";
import Link from "next/link";
import * as styledComponents from "styled-components";

const styled =
  (styledComponents as any).styled ??
  (styledComponents as any).default?.styled ??
  (styledComponents as any).default;

export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: var(--green);
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
`;
