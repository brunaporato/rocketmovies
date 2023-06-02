import { Container } from "./styles";
import { FiPlus, FiX } from 'react-icons/fi';

export function Tags({title, ...rest}) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}