import React, { useState } from "react";
import Select, { components } from "react-select";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import { Icon } from "ts-react-feather-icons";

interface FilterProps {
  filterOptions: any;
  onChange?: (value: any) => void;
  filterValue?: any;
  isClearable?: boolean;
  isLoading?: boolean;
  defaultValue?: string;
}

const Filter: React.FC<FilterProps> = ({
  filterOptions,
  onChange,
  filterValue,
  isClearable,
  isLoading,
  defaultValue,
}) => {
  const { t } = useTranslation();

  const options = filterOptions;

  const customStyles = {
    input: (provided: any) => ({
      ...provided,
      width: 190,
    }),
    menu: (provided: any) => ({
      ...provided,
      boxShadow: "none",
      border: "1px solid #E1E6EA",
      margin: 0,
      borderTop: "none",
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    }),
    control: (base: any, state: any) => ({
      ...base,
      boxShadow: "none",
      borderColor: "#E1E6EA",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: state.menuIsOpen ? 0 : 20,
      borderBottomRightRadius: state.menuIsOpen ? 0 : 20,
      borderBottom: state.menuIsOpen ? "none" : "1px solid #E1E6EA",
      paddingLeft: 10,
      fontSize: 15,
      transition: "all 0s",

      "&:hover": {
        borderColor: "#E1E6EA",
        cursor: "pointer",
      },
    }),
    indicatorSeparator: (styles: any) => ({ ...styles, display: "none" }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? "#000" : "#AFB8BF",
      background: "#fff",
      cursor: "pointer",
      borderRadius: 20,
      transition: "all 0s",
      fontSize: 15,

      "&:active": {
        background: "#fff",
      },

      "&:hover": {
        color: "#838C97",
      },
    }),
    dropdownIndicator: (base: any, state: any) => ({
      ...base,
      transition: "all 0.2s ease",
      transform: state.isFocused ? "rotate(180deg)" : null,
      paddingRight: 10,
    }),
  };

  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <Icon name="chevron-down" color="#838C97" size="20" />
      </components.DropdownIndicator>
    );
  };

  const ClearIndicator = (props: any) => {
    return (
      <components.ClearIndicator {...props}>
        <Icon name="x" color="#838C97" size="18" />
      </components.ClearIndicator>
    );
  };

  return (
    <Select
      options={options}
      styles={customStyles}
      isClearable={isClearable && true}
      components={{ DropdownIndicator, ClearIndicator }}
      placeholder={t("filter_placeholder")}
      value={filterValue}
      onChange={onChange}
      noOptionsMessage={() => t("filter_no_options_msg")}
      isLoading={isLoading}
      defaultInputValue={defaultValue}
    />
  );
};

export default Filter;
