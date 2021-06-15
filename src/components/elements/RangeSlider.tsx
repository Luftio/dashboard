import React from "react";
import styled from "styled-components";

const Slider = styled.input`
  -webkit-appearance: none;
  height: 2.5px;
  border-radius: 100px;
  background: linear-gradient(90deg, #031946, 67%, #e1e6ea 67%);
  outline: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex: 0.85;
  position: relative;
  top: 5px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    transition: all 0.15s ease-in-out;
    overflow: visible;
    box-shadow: ${(props) => props.theme.color_slider_box_shadow};
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    transition: background 0.15s ease-in-out;
    box-shadow: ${(props) => props.theme.color_block_box_shadow};
  }
`;

interface RangeSliderProps {
  value: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ value }) => {
  return <Slider id="slider" type="range" min="1" max="100" value={value} />;
};

export default RangeSlider;
