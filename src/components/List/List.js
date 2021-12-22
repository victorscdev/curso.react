import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={ 1990 } />
                <Item marca="Audi" ano_lancamento={ 1960 } />
                <Item marca="Fiat" ano_lancamento={ 1950 } />
            </ul>
        </>
    )
}

export default List