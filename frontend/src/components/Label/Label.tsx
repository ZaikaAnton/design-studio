import styled from "styled-components";
import { FC } from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: FC<LabelProps> = ({ htmlFor, children }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;

const StyledLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) =>
    theme.colors.Black}; /* Используйте значение из темы */
  font-size: ${({ theme }) =>
    theme.typography.bodyS}; /* Используйте значение из темы */
`;
