import styled, { css } from "styled-components";

const PulseEffect = styled.div<{ green?: boolean; yellow?: boolean; red?: boolean }>`
  background: #000;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  margin-left: 50px;
  height: 15px;
  width: 15px;
  padding-left: 15px;
  transform: scale(1);
  animation: pulse 2.5s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 8px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }

  ${(props) =>
    props.green &&
    css`
      background: ${(props) => props.theme.color_green_good};
	    box-shadow: 0 0 0 0 rgba(35, 164, 84, 1);
	    animation: pulse-green 2.5s infinite;
      }

    @keyframes pulse-green {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(35, 164, 84, 0.7);
        }
	
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 8px rgba(35, 164, 84, 0);
      }
	
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(35, 164, 84, 0);
      }
    }
    `}

  ${(props) =>
    props.yellow &&
    css`
      background: ${(props) => props.theme.color_yellow_neutral};
	    box-shadow: 0 0 0 0 rgba(255, 185, 81, 1);
	    animation: pulse-yellow 2.5s infinite;
      }

    @keyframes pulse-yellow {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 185, 81, 0.7);
        }
	
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 8px rgba(255, 185, 81, 0);
      }
	
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 185, 81, 0);
      }
    }
    `}

    ${(props) =>
    props.red &&
    css`
      background: ${(props) => props.theme.color_red_bad};
	    box-shadow: 0 0 0 0 rgba(229, 91, 91, 1);
	    animation: pulse-red 2.5s infinite;
      }

    @keyframes pulse-red {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(229, 91, 91, 0.7);
        }
	
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 8px rgba(229, 91, 91, 0);
      }
	
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(229, 91, 91, 0);
      }
    }
    `}
`;

export default PulseEffect;
