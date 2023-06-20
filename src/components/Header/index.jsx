import { Container, User } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <h1>RocketMovies</h1>
      <input type="text" placeholder="Pesquisar pelo título" />
      <User>
        <div>
          <h2>Bruna Porato</h2>
          <a onClick={signOut}>sair</a>
        </div>
        <Link to="/profile">
          <img src="https://github.com/brunaporato.png" alt="User's image" />
        </Link>
      </User>
    </Container>
  )
}