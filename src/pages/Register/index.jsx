import { Container, Form, Background } from "./styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { api } from "../../services/api";

import { BiUser, BiMailSend, BiLockAlt, BiLeftArrowAlt } from "react-icons/bi";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleRegister() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
      }
    });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Crie sua conta</h2>
        <Input
          type="text"
          placeholder="Nome"
          icon={BiUser}
          onChange={e => setName(e.target.value)}
        />

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
          title="Cadastrar"
          isActive
          onClick={handleRegister}
        />

        <Link className="link" to="/"><BiLeftArrowAlt /> Voltar para o login</Link>
      </Form>
      <Background />
    </Container>
  )
}