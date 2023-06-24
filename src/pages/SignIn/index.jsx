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
        <p>Application to track every movie you watch</p>
        <h2>Have an account?</h2>

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
          title="Sign In"
          isactive
          onClick={handleSignIn}
        />
        <Link className="link" to="/register">Register new user</Link>
      </Form>
      <Background />
    </Container>
  )
}