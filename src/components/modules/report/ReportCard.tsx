import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { DateUtils } from "react-day-picker";

import BasicText from "../../elements/BasicText";
import Button from "../../elements/Button";
import Calendar from "../../elements/Calendar";

const Card = styled.div`
  width: 100%;
  height: 500px;
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
  const [customOpen, setCustomOpen] = useState<boolean>(false);
  const [customRange, setCustomRange] = useState<any>({
    from: undefined,
    to: undefined,
  });

  const calendarRef = useRef<any>();

  const handleDayChange = (day: Date) => {
    if (day > new Date()) {
      return;
    }

    const range = DateUtils.addDayToRange(day, customRange);
    setCustomRange(range);
  };

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setCustomOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarRef]);

  return (
    <Card>
      <Main>
        <TopRow>
          <BasicText name>{subheading}</BasicText>
          <Button onClick={() => setCustomOpen(true)}>Nastavit datum</Button>
        </TopRow>
        {customOpen && (
          <div ref={calendarRef}>
            <Calendar
              isRange
              onDayClick={(day: Date) => handleDayChange(day)}
              selectedDays={customRange}
              onSubmit={() => setCustomOpen(false)}
            />
          </div>
        )}
        {/* <ReportChart data={data} /> */}
      </Main>
    </Card>
  );
};

export default ReportCard;
