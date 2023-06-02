import { Container } from "./styles";
import { VscStarEmpty, VscStarFull } from "react-icons/vsc";

export function Rating({bigSize, rate}) {
  let stars = [];

  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= rate) {
      stars.push(<VscStarFull key={cont} />);
    } else {
      stars.push(<VscStarEmpty key={cont} />);
    }
  }

  return(
    <Container bigSize={bigSize} data>
      {stars}
    </Container>
  )

}