
const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
    }
    return (
        <div>
            <h1>Simple Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Write your name" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;