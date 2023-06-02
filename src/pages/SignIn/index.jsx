import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { BiMailSend, BiLockAlt } from "react-icons/bi";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu login</h2>
        <Input type="text" placeholder="Email" icon={BiMailSend} />
        <Input type="password" placeholder="Senha" icon={BiLockAlt} />
        <Button title="Entrar" isActive />
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}