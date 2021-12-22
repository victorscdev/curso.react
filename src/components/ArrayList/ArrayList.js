function ArrayList({ itens }) {
    return (
        <>
            <h2>Renderização de Lista</h2>
            {itens.length > 0 ?
                (itens.map((item, index) => (
                    <p key={ index }>{ item }</p>
                ))) : (
                    <p>Não há itens na lista!</p>
                )
            }
        </>
    )
}

export default ArrayList