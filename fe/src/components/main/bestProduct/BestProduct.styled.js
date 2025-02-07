import styled from 'styled-components';
import { applyFlex } from '../../../helper/utils';

export const CategoryBadge = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  padding: 8px 8px;
  width: 76px;
  height: 42px;
  background: #f8f7f7;
  text-align: center;
  border: 2px solid #1b1b1b;
  box-sizing: border-box;
  border-radius: 999px;
`;

export const TitleWrapper = styled.div`
  ${({ flex, align }) => applyFlex({ flex, align })}
`;

export const StyledBestProduct = styled.div`
  margin-top: 56px;
  padding-bottom: 56px;
  border-bottom: solid 1px #ebebeb;
`;

export const BestProductHeader = styled.div`
  padding: 0 80px;
  border-bottom: 1px solid #ebebeb;
`;

export const TabBar = styled.ul`
  ${({ flex }) => applyFlex({ flex })}
  margin-top: 24px;
`;
