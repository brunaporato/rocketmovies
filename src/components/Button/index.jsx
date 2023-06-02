/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Button({icon: Icon, isActive = false, loading = false, title, ...rest}) {
  return(
    <Container
    type="button"
    disabled = {loading}
    isActive = {isActive}
    {...rest}>
        {Icon && <Icon size={20} />}
        { loading ? 'Carregando...' : title }
    </Container>
  )
}