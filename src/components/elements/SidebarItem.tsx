import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

import { Icon } from "ts-react-feather-icons";

const Item = styled.a<{ signout?: boolean; active?: boolean; hover?: boolean; dropdown?: boolean }>`
  display: flex;
  align-items: center;
  padding-left: 12%;
  margin-bottom: 6%;
  border-left: 3px solid transparent;

  &:hover {
    border-left: 3px solid transparent;
  }

  &:active {
    border-left: 3px solid transparent;
  }

  ${(props) =>
    props.dropdown &&
    css`
      padding-left: 5%;
      margin-bottom: 20px;
    `}

  ${(props) =>
    props.signout &&
    css`
      margin-top: 30%;

      &:hover {
        border-left: 3px solid transparent;
        color: ${(props) => props.theme.color_fail_hover};
        transition: ${(props) => props.theme.transition_primary};

        svg {
          stroke: ${(props) => props.theme.color_fail_hover};
        }
        span {
          color: ${(props) => props.theme.color_fail_hover};
        }
      }

      span {
        color: ${(props) => props.theme.color_fail};
      }
      svg {
        stroke: ${(props) => props.theme.color_fail};
      }

      ${(props) =>
        props.dropdown &&
        css`
          margin-top: 30px;
        `}
    `}

  ${(props) =>
    props.active &&
    css`
      border-left: 3px solid ${(props) => props.theme.color_brand};
      color: ${(props) => props.theme.color_brand};

      svg {
        stroke: ${(props) => props.theme.color_brand};
      }

      span {
        color: ${(props) => props.theme.color_brand};
      }

      &:hover {
        border-left: 3px solid ${(props) => props.theme.color_brand};
        transition: ${(props) => props.theme.transition_primary};
      }
    `}

    ${(props) =>
    props.hover &&
    css`
      margin: 10px 0;
      padding-left: 30px;
      padding-right: -10px;
    `}
`;

const Text = styled.span<{ dropdown?: boolean }>`
  color: ${(props) => props.theme.color_primary};
  margin-left: 20px;

  &:active {
    color: ${(props) => props.theme.color_brand};
  }

  ${(props) =>
    props.dropdown &&
    css`
      font-size: ${(props) => props.theme.font_size_sidebar_heading};
    `}
`;

const Area = styled.span<{ signout?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 15px;

  &:hover {
    color: ${(props) => props.theme.color_brand};
    transition: ${(props) => props.theme.transition_primary};

    svg {
      stroke: ${(props) => props.theme.color_brand};
    }

    span {
      color: ${(props) => props.theme.color_brand};
    }
  }

  @media only screen and (max-width: 1100px) {
    span {
      display: none;
      width: 100%;
    }
  }

  @media only screen and (max-width: 850px) {
    span {
      display: flex;
      width: 100%;
    }
  }

  ${(props) =>
    props.signout &&
    css`
      &:hover {
        color: ${(props) => props.theme.color_fail_hover};
        transition: ${(props) => props.theme.transition_primary};

        svg {
          stroke: ${(props) => props.theme.color_fail_hover};
        }

        span {
          color: ${(props) => props.theme.color_fail_hover};
        }
      }
    `}
`;

interface SidebarItemProps {
  url: string;
  icon: any;
  text: string;
  type?: boolean;
  onClick?: () => void;
  active?: boolean;
  hover?: boolean;
  dropdown?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ url, icon, text, type, active, hover, dropdown }) => {
  return (
    <Link href={url}>
      <Item dropdown={dropdown} hover={hover} active={active} signout={type}>
        <Area signout={type}>
          <Icon name={icon} size={dropdown ? "32" : "22"} color="#838C97" />
          <Text dropdown={dropdown}>{text}</Text>
        </Area>
      </Item>
    </Link>
  );
};

export default SidebarItem;
