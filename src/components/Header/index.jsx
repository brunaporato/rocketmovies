import { Container, User } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Link, useNavigate } from "react-router-dom";

import userNullAvatar from '../../assets/user-nullAvatar.jpg'
import { api } from '../../services/api'



export function Header({children}) {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : userNullAvatar;
  
  const navigate = useNavigate();

  function handleSignOut() {
    signOut()
    navigate("/");
  }

  return (
    <Container>
      <h1>RocketMovies</h1>
      {children}
      <User>
        <div>
          <h2>{user.name}</h2>
          <a onClick={handleSignOut}>sign out</a>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt="User's image" />
        </Link>
      </User>
    </Container>
  )
}