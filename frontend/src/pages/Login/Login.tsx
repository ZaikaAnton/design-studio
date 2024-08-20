import axios from "axios";
import FormAuth from "../../components/FormAuth/FormAuth";
import { API_URL } from "../../api/api";

const Login = () => {
  const handleLogin = async (username: string, password: string) => {
    console.log({ username, password });
    try {
      const response = await axios.post(`${API_URL}`, {
        username,
        password,
      });

      console.log("Response:", response.data);
      // Здесь можно добавить логику для обработки успешного логина, например, перенаправление или сохранение токена
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <FormAuth
      title="Страница логина"
      buttonText="Войти"
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
      onSubmit={handleLogin}
    />
  );
};

export default Login;
