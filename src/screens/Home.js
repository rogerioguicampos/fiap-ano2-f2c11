import { Link } from "react-router-dom";
import { Button } from "../common-components/Button/Button"
import { Cont } from "../common-components/Container/Container"

export function Home() {
	return (
    <Cont>
      <div>
        <Link to="/aboutme"><Button>Sobre mim</Button></Link>
        <Link to="/education"><Button>Formação</Button></Link>
        <Link to="/employmenthist"><Button>Experiência</Button></Link>
        <Link to="/hobbies"><Button>Hobbies</Button></Link>
      </div>
    </Cont>
  );
}
