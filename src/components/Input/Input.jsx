import axios from 'axios';
import React, { useState } from 'react'

const Input = () => {
    const [file, setFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        fetch('http://localhost:8001/', {
            method: 'POST',
            body: formData,
        })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Выберите файл:
                <input type="file" onChange={handleFileChange} />
            </label>
            <button type="submit">Отправить</button>
        </form>
    );
}

export default Input