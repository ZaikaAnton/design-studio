import styled from "styled-components";
import { FC, useState } from "react";
import Label from "../Label/Label";
import IconInput from "../IconInput/IconInput";

export interface InputProps {
  id: string;
  type: string; // Тип ввода: текст, пароль, телефон и т.д.
  placeholder: string; // Подсказка внутри поля
  name: string;
}

const Input: FC<InputProps> = ({ type = "text", placeholder, name }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Определяем текущий тип инпута
  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <>
      <ContainerInput>
        <Label htmlFor={name}>{placeholder}</Label>
        <ContainerInputIcon>
          <StyledInput type={inputType} placeholder={placeholder} name={name} />
          {type === "password" && (
            <IconInput
              onClick={togglePasswordVisibility}
              visible={isPasswordVisible}
            />
          )}
        </ContainerInputIcon>
      </ContainerInput>
    </>
  );
};

export default Input;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  text-align: left;
`;

const ContainerInputIcon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: ${({ theme }) => theme.spacing(30)};
  height: ${({ theme }) => theme.spacing(6)};
`;

const StyledInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.primary};
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  font-size: ${({ theme }) => theme.typography.bodyM};
  border: 1px solid ${({ theme }) => theme.colors.Gray};
  border-radius: 20px;
  outline: none;
  color: ${({ theme }) => theme.colors.Black};
  background-color: ${({ theme }) => theme.colors.White};
  transition: border-color 0.6s ease, box-shadow 0.6s ease;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ theme }) => theme.colors.Primary60};
    box-shadow: 0 0 0 3px rgba(15, 98, 254, 0.3);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.Gray};
  }
`;
