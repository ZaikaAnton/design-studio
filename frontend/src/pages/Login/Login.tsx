import FormAuth from "../../components/FormAuth/FormAuth";
import axios from "axios";

const Login = () => {
  const handleSubmit = async (username: string, password: string) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/authenticate",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Обработка успешного ответа
      console.log("Login successful:", response.data);
      // Сохранение токена или информации о пользователе при необходимости
      // localStorage.setItem('token', response.data.token);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Login failed:", error.response.data.error);
      } else {
        console.error("An unexpected error occurred");
      }
    }
  };
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
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
