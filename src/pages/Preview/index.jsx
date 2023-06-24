import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Tags } from "../../components/Tags";

import { Link, useNavigate, useParams } from "react-router-dom";

import userNullAvatar from '../../assets/user-nullAvatar.jpg';
import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api';


import { BiLeftArrowAlt, BiTime, BiX } from 'react-icons/bi';
import { useState } from "react";
import { useEffect } from "react";

export function Preview() {
  const [data, setData] = useState("");
  
  const { user } = useAuth();
  const params = useParams();

  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : userNullAvatar;

  async function handleDeleteNote() {
    const confirm = window.confirm("Do you want to remove this Movie?")

    if(confirm) {
      await api.delete(`/movienotes/${params.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/movienotes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])

  return(
    <Container>
      <Header />
      <Link to="/">
        <BiLeftArrowAlt />
        Back
      </Link>

      {
        data &&
        <main>
          <div className="top">
            <div className="title">
              <h1>{data.title}</h1>
              <Rating bigSize rate={data.rating}/>
            </div>
            
          </div>
          <div className="signed">
            <img src={avatarUrl} alt="Writer's picture" />
            <p>Written by <strong>{user.name}</strong></p>
            <BiTime />
            <p>{data.updated_at}</p>
          </div>
          { data.tags &&
            <div className="tags">
              {
                data.tags.map(tag =>(
                  <Tags
                  key={String(tag.id)}
                  title={tag.name}
                  />
                ))
              }
            </div>
          }
          <p>
            {data.description}
          </p>

          <a
              className="delete"
              onClick={handleDeleteNote}
          >
              <BiX />Delete Movie
          </a>
        </main>
      }
    </Container>
  )
}