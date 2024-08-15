import Button from "./components/Button/Button"
import Title from "./components/Title/Title"
import Input from "./components/Input/Input"

function App() {
  

  return (
    <>
      <h1>Проект</h1>
      <Title>Страница логина</Title>
      <Input id="login" type="text" placeholder="Логин" name='login'></Input>
      <Input id="password" type="password" placeholder="Пароль" name='password'></Input>
      <Button>Вход</Button>
    </>
  )
}

export default App
