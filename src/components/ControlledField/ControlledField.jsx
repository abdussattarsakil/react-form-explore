import { useState } from "react";

const ControlledField = () => {

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }
    }

    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const handlePasswordOnChange = e => {
        setPassword(e.target.value)
        password.length < 6 ? setError('input more than 6 characters') : setError('')
    }

    return (
        <div>
            <h1>Controlled Field</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="write your mail" required />
                <br />
                <input type="password" name="password" placeholder="password" onChange={handlePasswordOnChange} defaultValue={password} required />
                <br />
                <input type="submit" value="Submit" />
                <small>{error}</small>
            </form>
        </div>
    );
};

export default ControlledField;