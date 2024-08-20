import styled from "styled-components";
import { FC } from "react";
import { useRef } from "react";

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
  onSubmit: (username: string, password: string) => void;
}

const FormAuth: FC<FromAuthProp> = ({
  title,
  buttonText,
  emailProps,
  passwordProps,
  onSubmit,
}) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    onSubmit(username, password);
  };

  return (
    <Background>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Title>{title}</Title>
          <Input {...emailProps} ref={usernameRef} />
          <Input {...passwordProps} ref={passwordRef} />
          <Button type="submit">{buttonText}</Button>
        </Form>
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

const Form = styled.form`
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
