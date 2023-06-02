import { Container } from "./styles";

import { BiX, BiPlus } from 'react-icons/bi';

export function TagItem({isNew, value, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />
      <button
        type="button"
        onClick={onClick}
      >
        { isNew ? <BiPlus /> : <BiX />}
      </button>
    </Container>
  )
}