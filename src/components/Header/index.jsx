import { Container, User } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";

import userNullAvatar from '../../assets/user-nullAvatar.jpg'
import { api } from '../../services/api'
import { useState } from "react";
import { useEffect } from "react";


export function Header() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : userNullAvatar;

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movienotes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <h1>RocketMovies</h1>
      <input
        type="text"
        placeholder="Pesquisar pelo título"
        onChange={(e) => setSearch(e.target.value)}
      />
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