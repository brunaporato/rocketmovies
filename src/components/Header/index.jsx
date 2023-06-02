import { Container, User } from "./styles";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input type="text" placeholder="Pesquisar pelo título" />
      <User>
        <div>
          <h2>Bruna Porato</h2>
          <a href="#">sair</a>
        </div>
        <Link to="/profile">
          <img src="https://github.com/brunaporato.png" alt="User's image" />
        </Link>
      </User>
    </Container>
  )
}