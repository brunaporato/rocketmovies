import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";


import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { BiUser, BiMailSend, BiLockAlt, BiLeftArrowAlt } from "react-icons/bi";

export function Register() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Crie sua conta</h2>
        <Input type="text" placeholder="Nome" icon={BiUser} />
        <Input type="text" placeholder="Email" icon={BiMailSend} />
        <Input type="password" placeholder="Senha" icon={BiLockAlt} />
        <Button title="Cadastrar" isActive />
        <Link to="/"><BiLeftArrowAlt /> Voltar para o login</Link>
      </Form>
      <Background />
    </Container>
  )
}