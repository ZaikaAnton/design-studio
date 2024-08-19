import FormAuth from "../../components/FormAuth/FormAuth";

const Registration = () => {
  const handleRegistration = (username: string, password: string) => {
    // Ваша логика регистрации
    console.log("User registered with:", username, password);
  };

  return (
    <FormAuth
      title="Регистрация"
      buttonText="Зарегистрироваться"
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
      onSubmit={handleRegistration} // Добавлен onSubmit
    />
  );
};

export default Registration;
