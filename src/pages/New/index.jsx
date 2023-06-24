import { Container, TagWrapper } from "./styles";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TagItem } from "../../components/TagItem"
import { Button } from "../../components/Button"

import { Link, useNavigate } from "react-router-dom";


import { BiLeftArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");

  const [tag, setTag] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTag(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleDeleteTag(deleted) {
    setTag(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Please enter the movie title.")
    }

    if(isNaN(Number(rate)) || rate > 5 || rate < 0) {
      return alert("Rate this movie from 0 to 5")
    }

    if(newTag) {
      return alert("There's a value in tag that wasn't added. Please add or delete it.")
    }


    await api.post("/movienotes", {
      title,
      description,
      rating: rate,
      tags: tag
    });

    alert("Movie note created");
    navigate("/");
  }

  return(
    <Container>
      <Header />
      <div className="input-new">
      <Link to="/"> <BiLeftArrowAlt /> Voltar</Link>
        <h1>Novo filme</h1>
        <div className="name-rate">
          <Input
            type="text"
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Nota (de 0 a 5)"
            onChange={e => setRate(e.target.value)}
          />
        </div>

        <textarea
          placeholder="Observações"
          onChange={e => setDescription(e.target.value)}
          />

      <div className="tags">
        <p>Marcadores</p>
        <TagWrapper>
          {
            tag.map((tag, index) => (
              <TagItem
                key={String(index)}
                value={tag}
                onClick={() => handleDeleteTag(tag)}
              />
            ))
          }
          <TagItem
            isNew
            placeholder="Add Tag"
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            onClick={handleAddTag}
          />
        </TagWrapper>
      </div>
      <footer>
        <Button
          title="Descartar alterações"
          to="/"
        />
        <Button
          isactive
          title="Salvar alterações"
          onClick={handleNewNote}
        />
      </footer>
      </div>
    </Container>
  )
}