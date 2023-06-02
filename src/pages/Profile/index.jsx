import { Container, Avatar, Form } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

import { BiLeftArrowAlt, BiCamera, BiUser, BiMailSend, BiLockAlt} from 'react-icons/bi';

export function Profile() {
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
          <Input type="text" placeholder="Nome" icon={BiUser} />
          <Input type="text" placeholder="Email" icon={BiMailSend}/>
        </div>
        <div>
          <Input type="password" placeholder="Senha atual" icon={BiLockAlt}/>
          <Input type="password" placeholder="Nova senha" icon={BiLockAlt}/>
        </div>
        <Button id="Salvar" title="Salvar" isActive/>
      </Form>
    </Container>
  )
}