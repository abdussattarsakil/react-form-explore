import useInputField from "./UseInputField";

const HookForm = () => {

    const [name, nameOnChange] = useInputField("");
    const [password,passwordOnChange]=useInputField("")

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submit",name,password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={nameOnChange} defaultValue={name} />
                <br />
                <input onChange={passwordOnChange} defaultValue={password} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;