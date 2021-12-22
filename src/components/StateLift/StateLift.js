import { useState } from 'react'
import InputName from './InputName'
import Salutation from './Salutation'

function StateLift() {
    const [name, setName] = useState()

    return (
        <div>
            <h2>State Lift</h2>
            <InputName type="text" placeholder="Seu nome" setName={setName} />
            <Salutation name={ name } />
        </div>
    )
}

export default StateLift