function ComponenteResumoSobreVoce(props){
    return (
        <div>
            <div>Resumo</div>
            <p>{props.children}</p>
        </div>
    );
};

export {ComponenteResumoSobreVoce};