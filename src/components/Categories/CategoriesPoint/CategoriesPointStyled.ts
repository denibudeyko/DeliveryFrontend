import styled from 'styled-components';
import { COLORS, HELPERS } from '../../../constants';

export const CategoriesPointStyled = styled.div`
  flex: auto;
  margin-right: 10px;
  a {
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.0979294), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    box-sizing: border-box;
    background: ${COLORS.WHITE};
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    justify-content: center;
    height: 35px;
    transition: ${HELPERS.TRANSITION};
    &:last-child {
      margin-right: 0;
    }
    span {
      color: ${COLORS.GRAY_6};
      font-size: 14px;
      font-weight: 500;
      transition: ${HELPERS.TRANSITION};
    }
    &.active {
      background: ${COLORS.PRIMARY_BLUE};
      span {
        color: ${COLORS.WHITE};
      }
    }
    &:hover {
      background: ${COLORS.BLUE_DARK};
      span {
        color: ${COLORS.WHITE};
      }
    }
  }
`;
