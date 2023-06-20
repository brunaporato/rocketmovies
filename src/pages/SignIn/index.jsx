import { Link } from "react-router-dom";
import { useState } from "react";

import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/auth";

import { BiMailSend, BiLockAlt } from "react-icons/bi";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu login</h2>

        <Input
          type="text"
          placeholder="Email"
          icon={BiMailSend}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          icon={BiLockAlt}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Entrar"
          isActive
          onClick={handleSignIn}
        />
        <Link className="link" to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}