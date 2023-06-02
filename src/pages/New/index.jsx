import { Container, TagWrapper } from "./styles";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TagItem } from "../../components/TagItem"
import { Button } from "../../components/Button"

import { Link } from "react-router-dom";


import { BiLeftArrowAlt } from 'react-icons/bi'

export function New() {
  return(
    <Container>
      <Header />
      <div className="input-new">
      <Link to="/"> <BiLeftArrowAlt /> Voltar</Link>
        <h1>Novo filme</h1>
        <div className="name-rate">
          <Input type="text" placeholder="Título" />
          <Input type="numer" placeholder="Nota (de 0 a 5)" />
        </div>
        <textarea placeholder="Observações" />
      <div className="tags">
        <p>Marcadores</p>
        <TagWrapper>
          <TagItem value="new" />
          <TagItem isNew placeholder="Nova tag" />
        </TagWrapper>
      </div>
      <footer>
        <Button title="Excluir filme" />
        <Button title="Salvar alterações" isActive />
      </footer>
      </div>
    </Container>
  )
}