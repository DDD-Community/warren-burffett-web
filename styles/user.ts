import { css } from '@emotion/react';

export const loginLayout = css`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 4.8rem 0;

  @media (min-width: 768px) {
    align-items: center;
    height: 100%;
    padding: 0;
  }
`;

export const loginPanel = css`
  width: 32.7rem;

  @media (min-width: 768px) {
    width: 37.6rem;
  }
`;

export const formLayout = css`
  display: flex;
  flex-direction: column;
`;

export const fieldLayout = css`
  width: 100%;
  margin-bottom: 3.2rem;

  input::placeholder {
    color: #e4e4e4;
  }

  & > div {
    margin-top: 0.4rem;
    font-size: 1.4rem;
    line-height: 1.2;
    letter-spacing: -0.25px;
    color: #e44e59;
  }
`;

export const lastField = css`
  margin-bottom: 4.8rem;
`;

export const underlineInput = css`
  width: 100%;
  height: 3.6rem;
  padding-bottom: 1.2rem;
  font-size: 2rem;
  line-height: 1.4;
  border: none;
  border-bottom: 1.5px solid #080808;
  color: #080808;
  caret-color: #3281f7;
`;

export const grayUnderlineInput = css`
  border-bottom-color: #b9b9b9;
`;

export const limeUnderlineInput = css`
  border-bottom-color: #3281f7;
`;

export const inputError = css`
  border-bottom-color: #e44e59;
`;

export const checkboxLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.4rem;

  div {
    color: red;
  }
`;

export const checkField = css`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 2.4rem;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  color: var(--black);

  /* Hide default checkbox */
  input {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
  }

  /* Custom checkbox */
  span {
    width: 1.7rem;
    height: 1.7rem;
    position: absolute;
    top: -1px;
    left: 0;
    background-color: var(--background-checkbox);
  }

  /* input 안에 들어갈 check */
  span::after {
    display: none;
    width: 0.6rem;
    height: 1.2rem;
    position: absolute;
    left: 3px;
    bottom: 2px;
    content: '';
    border: solid var(--button-login);
    border-width: 0 4px 4px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  /* check 상태로 변하면 check icon이 보임 */
  input:checked ~ span::after {
    display: block;
  }
`;

export const font24 = css`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.1;
  letter-spacing: -0.05em;
`;

export const fontGray = css`
  margin-bottom: 5.3rem;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.8;
  letter-spacing: -0.05em;
  text-align: center;
  color: var(--font-gray);
`;
