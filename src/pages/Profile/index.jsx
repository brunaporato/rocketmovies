import { useState } from "react";

import { useAuth } from "../../hooks/auth"

import { Container, Avatar, Form } from "./styles";

import userNullAvatar from '../../assets/user-nullAvatar.jpg'

import { api } from '../../services/api'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link, useNavigate } from 'react-router-dom'

import { BiLeftArrowAlt, BiCamera, BiUser, BiMailSend, BiLockAlt} from 'react-icons/bi';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : userNullAvatar;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: currentPassword
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
    navigate("/");
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return(
    <Container>
      <header>
      <Link to="/"> <BiLeftArrowAlt /> Back</Link>
      </header>
       <Avatar>
          <img src={avatar} alt="User's profile picture" />
          <label htmlFor="avatar">
            <BiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar}/>
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
            placeholder="Current password"
            icon={BiLockAlt}
            onChange={e => setCurrentPassword(e.target.value)}
          />

          <Input
            type="password"
            placeholder="New password"
            icon={BiLockAlt}
            onChange={e => setNewPassword(e.target.value)}
          />
        </div>
        <Button id="Salvar" title="Save Profile" isactive onClick={handleUpdate} />
      </Form>
    </Container>
  )
}