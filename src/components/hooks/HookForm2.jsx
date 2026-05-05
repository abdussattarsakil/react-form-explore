import useInputField2 from "./useInputField2";

const HookForm2 = () => {
    const [name, nameOnChange] = useInputField2("")
    const handleOnSubmit = e => {
        e.preventDefault();
        console.log("submit222", name);
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" onChange={nameOnChange} defaultValue={name} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default HookForm2;