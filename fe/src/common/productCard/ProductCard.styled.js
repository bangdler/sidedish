import styled from 'styled-components';
import { applyFlex } from '../../helper/utils';

function applyImgStyleByCardSize(size) {
  if (size === 'large') {
    return `
      width: 411px;
      height: 411px;
    `;
  }
  if (size === 'medium') {
    return `
      width: 302px;
      height: 302px;
    `;
  }
  if (size === 'small') {
    return `
      width: 160px;
      height: 160px;
    `;
  }
}

function applyTitleStyleByCardSize(size) {
  if (size === 'small') {
    return `
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      margin-top: 8px;
      width: 160px;
    `;
  }
  return `
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    margin-top: 16px;
  `;
}

export const StyledImg = styled.img`
  ${({ size }) => applyImgStyleByCardSize(size)}
`;

export const StyledH2 = styled.h2`
  font-style: normal;
  ${({ size }) => applyTitleStyleByCardSize(size)}
  color: #3f3f3f;
`;

export const StyledP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #777777;
  margin: 8px 0;
`;

export const PriceWrapper = styled.div`
  ${({ flex, align }) => applyFlex({ flex, align })}
  font-family: 'Noto Sans KR';
  font-style: normal;
`;

export const CutPrice = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.008em;
  color: #1b1b1b;
  margin-right: 8px;
`;

export const Price = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.008em;
  text-decoration-line: line-through;
  color: #bcbcbc;
`;

export const CardWrapper = styled.div`
  position: relative;
  margin-right: 24px;
  cursor: pointer;
`;
