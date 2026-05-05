import useStateHook from "./useStateHook";

const Form = () => {

    const [name, nameOnChange] = useStateHook("")

    const handleFormField = e => {
        e.preventDefault();
        console.log("submit-",name);
    }

    return (
        <div>
            <form onSubmit={handleFormField}>
                <input type="text" onChange={nameOnChange} defaultValue={name} />
                <input type="submit" value="Submit btn" />
            </form>
        </div>
    );
};

export default Form;