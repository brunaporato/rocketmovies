import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Movie } from "../../components/Movie"

import { useState } from "react";
import { useEffect } from "react";

import { FiPlus } from 'react-icons/fi'
import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState("");
  const [movieNotes, setMovieNotes] = useState([]);

  
  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/movienotes?title=${search}`);
      setMovieNotes(response.data);
    }

    fetchMovieNotes();
  }, [search]);

  return (
    <Container>
      <Header>
        <input
          type="text"
          placeholder="Search by title"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>
      <div className="title">
        <h1>My Movies</h1>
        <Button title="Add Movie" isactive icon={FiPlus} to="/new"/>
      </div>
      <main>
        <Content>
          {
            movieNotes.map(movieNote => (
            <Movie
              key={String(movieNote.id)}
              data={movieNote}
              to={`/preview/${movieNote.id}`}
            />))
          }
        </Content>
      </main>
    </Container>
  )
}