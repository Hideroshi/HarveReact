import { Container } from "react-bootstrap";
import { ListaProdutos } from "../componentes/ListaProdutos";
import NavBar from "../componentes/NavBar";
import CarrosselHome from "../componentes/Carrossel";

function Home() {
    return (
        <Container>
            <NavBar/>
            <CarrosselHome/>
            <ListaProdutos />
            {/* <Rodape /> */}
        </Container>
    );
};

export { Home };


