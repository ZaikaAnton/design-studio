import styled from "styled-components";
import { FC } from "react";
import { useState } from "react";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      onSubmit(username, password); // Вызов переданной функции
      console.log(username, password);
    } catch (error) {
      setError("An unexpected error occurred");
      console.log(error);
    }
  };

  return (
    <Background>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Title>{title}</Title>
          <Input
            {...emailProps}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            {...passwordProps}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>{buttonText}</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
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
const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;
