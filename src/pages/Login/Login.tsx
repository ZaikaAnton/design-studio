import FormAuth from "../../components/FormAuth/FormAuth";

const Login = () => {
  return (
    <FormAuth
      title="Страница логина"
      buttonText="Войти"
      emailProps={{
        id: "email",
        type: "text",
        placeholder: "Email",
        name: "email",
      }}
      passwordProps={{
        id: "password",
        type: "password",
        placeholder: "Пароль",
        name: "password",
      }}
    />
  );
};

export default Login;
