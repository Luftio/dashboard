import React from "react";
import styled from "styled-components";
//@ts-ignore
import Shimmer from "react-shimmer-effect";
import ShimmerItem from "../../elements/ShimmerItem";

const Card = styled.div`
  background: #fff;
  width: 95%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.theme.border_radius_primary};
  padding: 40px 50px;
  padding-top: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

interface ShimmerBlockProps {
  feedback?: boolean;
  suggestion?: boolean;
  event?: boolean;
}

const ShimmerBlock: React.FC<ShimmerBlockProps> = ({ feedback, suggestion, event }) => {
  return (
    <Card>
      {feedback && (
        <Shimmer>
          <ShimmerItem width={25} marginBottom={15}></ShimmerItem>
          <ShimmerItem width={15} marginBottom={45}></ShimmerItem>
          <ShimmerItem width={40} marginBottom={25}></ShimmerItem>
          <ShimmerItem width={100} marginBottom={25}></ShimmerItem>
          <ShimmerItem width={100} marginBottom={23}></ShimmerItem>
        </Shimmer>
      )}
      {suggestion && (
        <Shimmer>
          <ShimmerItem width={25} marginBottom={15}></ShimmerItem>
          <ShimmerItem width={15} marginBottom={45}></ShimmerItem>
          <ShimmerItem width={40} marginBottom={25}></ShimmerItem>
          <ShimmerItem width={100} marginBottom={25}></ShimmerItem>
          <ShimmerItem width={100} marginBottom={25}></ShimmerItem>
          <ShimmerItem width={100} marginBottom={23}></ShimmerItem>
        </Shimmer>
      )}
      {event && (
        <Shimmer>
          <ShimmerItem width={25} marginBottom={15}></ShimmerItem>
          <ShimmerItem width={15} marginBottom={45}></ShimmerItem>
          <ShimmerItem width={50} marginBottom={25}></ShimmerItem>
          <ShimmerItem width={100} marginBottom={23}></ShimmerItem>
        </Shimmer>
      )}
    </Card>
  );
};

export default ShimmerBlock;
