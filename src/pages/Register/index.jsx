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
      return alert("You need to fill the requirements");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("New user created :)");
      navigate("/");
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong :(");
      }
    });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to track every movie you watch</p>
        <h2>Register for free</h2>
        <Input
          type="text"
          placeholder="Name"
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
          placeholder="Password"
          icon={BiLockAlt} 
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Sign Up"
          isactive
          onClick={handleRegister}
        />

        <Link className="link" to="/"><BiLeftArrowAlt /> Back to sign in</Link>
      </Form>
      <Background />
    </Container>
  )
}