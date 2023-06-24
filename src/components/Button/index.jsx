/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Button({icon: Icon, isactive, loading = false, title, ...rest}) {
  return(
    <Container
    type="button"
    disabled = {loading}
    isactive = {isactive}
    {...rest}>
        {Icon && <Icon size={20} />}
        { loading ? 'Carregando...' : title }
    </Container>
  )
}