import React from "react";
import styled, { css } from "styled-components";

const ButtonStyles = css`
  background: ${(props) => props.theme.colors[props.theme.accent][2]};
  color: ${(props) => props.theme.colors[props.theme.accent][8]};
  padding: 0.5rem 1em;
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  font-weight: 600;
  transition: background 100ms ease-in-out;
  cursor: pointer;
  ${(props) => props.theme.shadows[2]}

  @supports (-moz-outline-radius: 0.5em) {
    &:focus {
      outline: 2px solid ${(props) => props.theme.colors.grey[1]};
      outline-offset: 2px;
      -moz-outline-radius: 0.5em;
    }
  }

  @supports not (-moz-outline-radius: 0.5em) {
    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.grey[7]},
        0 0 0 4px ${(props) => props.theme.colors.grey[1]};
    }
  }

  &:hover {
    background: ${(props) => props.theme.colors[props.theme.accent][1]};
  }

  svg {
    color: ${(props) => props.theme.colors[props.theme.accent][6]};
  }
`;

const ExternalLinkButton = styled.a`
  ${ButtonStyles}
`;

const LinkButton = ({ href, children }) => (
  <ExternalLinkButton data-button href={href}>
    {children}
  </ExternalLinkButton>
);

export { ButtonStyles, LinkButton };
