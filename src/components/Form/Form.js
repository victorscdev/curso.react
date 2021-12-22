import { useState } from 'react'

function Form() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    function cadastrarUsuario(event) {
        event.preventDefault()
        alert(`Usuario ${name} cadastrado com a senha: ${password}`)
    }

    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={ cadastrarUsuario }>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={ (event) => setName(event.target.value) }
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="text"
                        id="passoword"
                        name="passoword"
                        placeholder="Digite sua senha"
                        onChange={ (event) => setPassword(event.target.value) }
                    />
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Form