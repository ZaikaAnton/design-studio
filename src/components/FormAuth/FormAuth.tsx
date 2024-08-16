import styled from "styled-components";
import { FC } from "react";

// import { InputProps } from "../Input/Input";
import Background from "../Background/Background";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import { InputProps } from "../Input/Input";

interface FromAuthProp {
  title: string;
  buttonText: string;
  emailProps: InputProps;
  passwordProps: InputProps;
}

const FormAuth: FC<FromAuthProp> = ({
  title,
  buttonText,
  emailProps,
  passwordProps,
}) => {
  return (
    <Background>
      <FormContainer>
        <Wrapper>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Title>{title}</Title>
          <Input {...emailProps} />
          <Input {...passwordProps} />
          <Button>{buttonText}</Button>
        </Wrapper>
      </FormContainer>
    </Background>
  );
};

export default FormAuth;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  z-index: 1;
`;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(7)};
  background-color: ${({ theme }) => theme.colors.White};
  width: 450px;
  border-radius: 12%;
  position: relative; /* Для позиционирования логотипа внутри формы */
  box-shadow: 0 4px 8px #e2f0f7;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 10px; /* Отступ сверху от границы формы */
  right: 10px; /* Отступ справа от границы формы */
  z-index: 2; /* Убедитесь, что логотип находится поверх других элементов */
`;
