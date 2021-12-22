function Salutation({ name }) {
    function gerarSaudacao(algunNome) {
        return `Olá ${ algunNome }, tudo bem ?`
    }

    return (
        <>
            {name && (
                <p>{ gerarSaudacao(name) }</p>
            )}
        </>
    )
}

export default Salutation