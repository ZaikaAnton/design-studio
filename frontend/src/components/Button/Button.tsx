import styled from "styled-components";
import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.White};
  width: ${({ theme }) => theme.spacing(30)};
  height: ${({ theme }) => theme.spacing(6)};
  font-size: ${({ theme }) => theme.typography.buttonL};
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.Black};
  cursor: pointer;
  transition: background-color 0.6s ease, color 0.6s ease, box-shadow 0.6s ease;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Добавляем тень */

  &:hover {
    background-color: ${({ theme }) => theme.colors.Gray};
    color: ${({ theme }) => theme.colors.Black};
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 1); /* Увеличиваем тень при hover */
  }
`;
