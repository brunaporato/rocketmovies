import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Movie } from "../../components/Movie"



import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header />
      <div className="title">
        <h1>Meus filmes</h1>
        <Button title="Adicionar filme" isActive icon={FiPlus} to="/new"/>
      </div>
      <main>
        <Content>
          <Movie data={{
              title: 'Interestellar',
              rate: '4',
              description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              tags: [
                {id: '1', name: 'Ficção Científica'},
                {id: '2', name: 'Drama'},
                {id: '3', name: 'Família'}
              ]
              }} to="/preview/1" />
              <Movie data={{
              title: 'Interestellar',
              rate: '4',
              description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              tags: [
                {id: '1', name: 'Ficção Científica'},
                {id: '2', name: 'Drama'},
                {id: '3', name: 'Família'}
              ]
              }} />
              <Movie data={{
              title: 'Interestellar',
              rate: '4',
              description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              tags: [
                {id: '1', name: 'Ficção Científica'},
                {id: '2', name: 'Drama'},
                {id: '3', name: 'Família'}
              ]
              }} />
        </Content>
      </main>
    </Container>
  )
}