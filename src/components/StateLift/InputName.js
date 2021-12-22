function InputName({ type, placeholder, setName }) {
    return (
        <div>
            <h3>Digite seu nome:</h3>
            <input
                type={type}
                placeholder={placeholder}
                onChange={ (event) => setName(event.target.value) }
            />
        </div>
    )
}

export default InputName