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
      <Link to="/"> <BiLeftArrowAlt /> Back</Link>
        <h1>New Movie</h1>
        <div className="name-rate">
          <Input
            type="text"
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Rate (from 0 to 5)"
            onChange={e => setRate(e.target.value)}
          />
        </div>

        <textarea
          placeholder="Description"
          onChange={e => setDescription(e.target.value)}
          />

      <div className="tags">
        <p>Tags</p>
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
          title="Discard Movie"
          to="/"
        />
        <Button
          isactive
          title="Save Movie"
          onClick={handleNewNote}
        />
      </footer>
      </div>
    </Container>
  )
}