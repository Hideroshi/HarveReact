import {useEffect, useState} from "react";

function ComponenteDados(props) {

    const [ nome, setNome] = useState("Aurelio");

    useEffect(() => { 
        //alert(`Nome alterado para ${nome}`);
    }, [nome]);
 
    return (
        <div>
            <p>Nome: {nome}</p> 
            <button onClick={() => setNome("Aurelio Thomasi Jr")}>Exibir Nome Completo</button> &nbsp;
            <button onClick={() => setNome("Aurelio")}>Exibir Nome</button> &nbsp;
            
            <p>Idade: {props.idade}</p>
            <p>Telefone: {props.telefone}</p>
        </div>
    );
};

export {ComponenteDados};