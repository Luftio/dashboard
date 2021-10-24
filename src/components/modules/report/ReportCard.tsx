import React from "react";
import styled from "styled-components";

import BasicText from "../../elements/BasicText";
import ReportChart from "./ReportChart";

const Card = styled.div`
  width: 100%;
  border-radius: ${(props) => props.theme.border_radius_primary};
  background-color: #fff;
  box-shadow: ${(props) => props.theme.color_block_box_shadow};
  padding: 15px 15px;
  margin-top: 1.7%;
  margin-bottom: 20px;
  overflow: scroll;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.08);
    transition: ${(props) => props.theme.transition_primary};
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    margin-right: 0;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Main = styled.div`
  position: relative;
`;

interface ReportCardProps {
  data?: any;
  subheading: string;
}

const ReportCard: React.FC<ReportCardProps> = ({ data, subheading }) => {
  return (
    <Card>
      <Main>
        <TopRow>
          <BasicText name>{subheading}</BasicText>
        </TopRow>
        {data != null && <ReportChart data={data} />}
      </Main>
    </Card>
  );
};

export default ReportCard;
