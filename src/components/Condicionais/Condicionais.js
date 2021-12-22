import { useState } from 'react'

function Condicionais() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(event) {
        event.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <div>
            {!userEmail && (
                <div>
                    <h2>Cadastre seu email</h2>
                    <form onSubmit={ enviarEmail }>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu email..."
                        onChange={ (event) => setEmail(event.target.value) }
                    />
                    <button type="submit">Enviar email</button>
                    </form>
                </div>
            )}
            {userEmail && (
                <div>
                    <p>O Email do usuario é: { userEmail }</p>
                    <button onClick={ limparEmail }>Limpar Email</button>
                </div>
            )}
        </div>
    )
}

export default Condicionais