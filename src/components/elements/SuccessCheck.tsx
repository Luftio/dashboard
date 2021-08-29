import React from "react";
import styled, { css } from "styled-components";

const SuccessCheckmark = styled.div`
  width: 80px;
  height: 115px;
  margin: 30px auto;
  transform: scale(1.3);
`;

const CheckIcon = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  border: 4px solid #4caf50;

  &:before {
    top: 3px;
    left: -2px;
    width: 30px;
    transform-origin: 100% 50%;
    border-radius: 100px 0 0 100px;
  }

  &:after {
    top: 0;
    left: 30px;
    width: 60px;
    transform-origin: 0 50%;
    border-radius: 0 100px 100px 0;
    animation: rotate-circle 4.25s ease-in;

    @keyframes rotate-circle {
      0% {
        transform: rotate(-45deg);
      }
      5% {
        transform: rotate(-45deg);
      }
      12% {
        transform: rotate(-405deg);
      }
      100% {
        transform: rotate(-405deg);
      }
    }
  }

  &:before,
  &:after {
    content: "";
    height: 100px;
    position: absolute;
    background: #ffffff;
    transform: rotate(-45deg);
  }
`;

const IconLine = styled.span<{ tip?: boolean; long?: boolean }>`
  height: 5px;
  background-color: #4caf50;
  display: block;
  border-radius: 2px;
  position: absolute;
  z-index: 10;

  ${(props) =>
    props.tip &&
    css`
      top: 46px;
      left: 14px;
      width: 25px;
      transform: rotate(45deg);
      animation: icon-line-tip 0.75s;

      @keyframes icon-line-tip {
        0% {
          width: 0;
          left: 1px;
          top: 19px;
        }
        54% {
          width: 0;
          left: 1px;
          top: 19px;
        }
        70% {
          width: 50px;
          left: -8px;
          top: 37px;
        }
        84% {
          width: 17px;
          left: 21px;
          top: 48px;
        }
        100% {
          width: 25px;
          left: 14px;
          top: 45px;
        }
      }
    `}

  ${(props) =>
    props.long &&
    css`
      top: 38px;
      right: 8px;
      width: 47px;
      transform: rotate(-45deg);
      animation: icon-line-long 0.75s;

      @keyframes icon-line-long {
        0% {
          width: 0;
          right: 46px;
          top: 54px;
        }
        65% {
          width: 0;
          right: 46px;
          top: 54px;
        }
        84% {
          width: 55px;
          right: 0px;
          top: 35px;
        }
        100% {
          width: 47px;
          right: 8px;
          top: 38px;
        }
      }
    `}
`;

const IconCircle = styled.div`
  top: -4px;
  left: -4px;
  z-index: 10;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  box-sizing: content-box;
  border: 4px solid rgba(76, 175, 80, 0.5);
`;

const IconFix = styled.div`
  top: 8px;
  width: 5px;
  left: 26px;
  z-index: 1;
  height: 85px;
  position: absolute;
  transform: rotate(-45deg);
  background-color: #ffffff;
`;

const SuccessCheck: React.FC = () => {
  return (
    <SuccessCheckmark>
      <CheckIcon>
        <IconLine tip></IconLine>
        <IconLine long></IconLine>
        <IconCircle></IconCircle>
        <IconFix></IconFix>
      </CheckIcon>
    </SuccessCheckmark>
  );
};

export default SuccessCheck;
