import { Container } from "react-bootstrap";
import { ListaProdutos } from "../componentes/ListaProdutos";
import  NavBar  from  "../componentes/NavBar";

function Produtos(){
    return (
        <Container>
            <NavBar/>
            <ListaProdutos />
        </Container>
    );
};

export { Produtos };