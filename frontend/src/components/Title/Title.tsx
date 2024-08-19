import styled from "styled-components";
import { FC } from "react";
// import { theme } from "../theme"; // Убедитесь, что путь к теме правильный

interface TitleProps {
    children: React.ReactNode;
    fontSize?: string; // Пропс для размера текста
    color?: string;    // Пропс для цвета текста
}

const Title: FC<TitleProps> = ({ children, fontSize, color }) => {
    return (
        <StyledTitle fontSize={fontSize} color={color}>
            {children}
        </StyledTitle>
    );
}

export default Title;

const StyledTitle = styled.p<{ fontSize?: string; color?: string }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ fontSize, theme }) => fontSize || theme.typography.h4};    // Размер текста по умолчанию 24px
  color: ${({ color, theme }) => color || theme.colors.Black}; // Цвет текста по умолчанию черный
`;
