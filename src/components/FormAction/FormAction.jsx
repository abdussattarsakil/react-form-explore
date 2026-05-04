
const FormAction = () => {

    const handleFormAction = (formData) => {
        console.log(formData.get('name'));
    }

    return (
        <div>
            <h1>Form Action</h1>
            <form action={handleFormAction}>
                <input type="text" name='name' placeholder="Write Name" />
                <br />
                <input type="email" name='email' placeholder="Write Email" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;