import { Container, User } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";

import userNullAvatar from '../../assets/user-nullAvatar.jpg'
import { api } from '../../services/api'


export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : userNullAvatar;


  return (
    <Container>
      <h1>RocketMovies</h1>
      <input type="text" placeholder="Pesquisar pelo título" />
      <User>
        <div>
          <h2>{user.name}</h2>
          <a onClick={signOut}>sair</a>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt="User's image" />
        </Link>
      </User>
    </Container>
  )
}