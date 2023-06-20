import { useState } from "react";

import { useAuth } from "../../hooks/auth"

import { Container, Avatar, Form } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

import { BiLeftArrowAlt, BiCamera, BiUser, BiMailSend, BiLockAlt} from 'react-icons/bi';

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      old_password: currentPassword
    }

    await updateProfile({ user });
  }

  return(
    <Container>
      <header>
      <Link to="/"> <BiLeftArrowAlt /> Voltar</Link>
      </header>
       <Avatar>
          <img src="https://github.com/brunaporato.png" alt="User's profile picture" />
          <label htmlFor="avatar">
            <BiCamera />
            <input id="avatar" type="file" />
          </label>
       </Avatar>
      <Form>
        <div>
          <Input
            type="text"
            placeholder="Nome"
            icon={BiUser}
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Email"
            icon={BiMailSend}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Senha atual"
            icon={BiLockAlt}
            onChange={e => setCurrentPassword(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Nova senha"
            icon={BiLockAlt}
            onChange={e => setNewPassword(e.target.value)}
          />
        </div>
        <Button id="Salvar" title="Salvar" isActive onClick={handleUpdate} />
      </Form>
    </Container>
  )
}