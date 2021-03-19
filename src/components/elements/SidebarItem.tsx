import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

import { Icon } from "ts-react-feather-icons";

const Item = styled.a<{ signout?: boolean; active?: boolean; hover?: boolean }>`
  display: flex;
  align-items: center;
  padding-left: 12%;
  margin-bottom: 6%;
  border-left: 3px solid transparent;

  &:hover {
    border-left: 3px solid transparent;
  }

  ${(props) =>
    props.signout &&
    css`
      margin: 40% 0 0 0;

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

const Text = styled.span`
  color: ${(props) => props.theme.color_primary};
  margin-left: 20px;

  &:active {
    color: ${(props) => props.theme.color_brand};
    margin: 0;
  }
`;

const Area = styled.span`
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

  @media only screen and (max-width: 1000px) {
    span {
      display: none;
      width: 100%;
    }
  }
`;

interface Props {
  url: string;
  icon: any;
  text: string;
  type?: boolean;
  onClick?: () => void;
  active?: boolean;
  hover?: boolean;
}

const SidebarItem: React.FC<Props> = ({ url, icon, text, type, active, hover }) => {
  return (
    <Link href={url}>
      {type ? (
        <Item signout>
          <Area>
            <Icon name={icon} size="22" color="#838C97" />
            <Text>{text}</Text>
          </Area>
        </Item>
      ) : (
        <Item hover={hover} active={active}>
          <Area>
            <Icon name={icon} size="22" color="#838C97" />
            <Text>{text}</Text>
          </Area>
        </Item>
      )}
    </Link>
  );
};

export default SidebarItem;
