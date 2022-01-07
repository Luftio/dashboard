import React, { useState } from "react";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import Button from "./Button";

const CalendarDiv = styled.div`
  position: absolute;
  background: #fff;
  padding: 10px;
  border-radius: ${(props) => props.theme.border_radius_primary};
  box-shadow: ${(props) => props.theme.color_input_box_shadow};
  z-index: 10000;
  right: 0;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

interface CalendarProps {
  onDayClick: (day: Date) => void;
  onSubmit?: () => void;
  customRange?: Date | null;
  isRange?: boolean;
  selectedDays?: any;
}

const Calendar: React.FC<CalendarProps> = ({ onDayClick, customRange, isRange, selectedDays, onSubmit }) => {
  const { t } = useTranslation();

  const MONTHS = [
    t("jan"),
    t("feb"),
    t("mar"),
    t("apr"),
    t("may"),
    t("jun"),
    t("jul"),
    t("aug"),
    t("sep"),
    t("oct"),
    t("nov"),
    t("dec"),
  ];
  const WEEKDAYS_SHORT = [t("mon"), t("tue"), t("wed"), t("thu"), t("fri"), t("sat"), t("sun")];

  const modifiers = {
    today: new Date(),
    selectedDate: customRange,
    selectedRange: selectedDays,
  };

  const modifiersStyles = {
    selectedDate: {
      color: "white",
      backgroundColor: "#031946",
    },
    today: {
      color: "#031946",
      backgroundColor: "#F0F5FF",
    },

    start: {
      color: "white",
      backgroundColor: "#031946",
      borderRadius: 0,
    },
    end: {
      color: "white",
      backgroundColor: "#031946",
      borderRadius: 0,
    },
    selectedRange: {
      color: "white",
      backgroundColor: "#031946",
      borderRadius: 0,
    },
  };

  return (
    <CalendarDiv>
      {isRange ? (
        <>
          <DayPicker
            locale="it"
            months={MONTHS}
            weekdaysShort={WEEKDAYS_SHORT}
            firstDayOfWeek={1}
            onDayClick={onDayClick}
            // @ts-ignore
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            disabledDays={{ after: new Date() }}
            selectedDays={selectedDays}
            numberOfMonths={2}
          />
          <Button primaryFullWidth onClick={onSubmit}>
            Vybrat
          </Button>
        </>
      ) : (
        <DayPicker
          locale="it"
          months={MONTHS}
          weekdaysShort={WEEKDAYS_SHORT}
          firstDayOfWeek={1}
          onDayClick={onDayClick}
          // @ts-ignore
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          disabledDays={{ after: new Date() }}
        />
      )}
    </CalendarDiv>
  );
};

export default Calendar;
