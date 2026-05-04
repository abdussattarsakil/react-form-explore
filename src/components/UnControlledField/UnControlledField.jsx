import { useRef } from "react";

const UnControlledField = () => {

    const emailRef = useRef('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(emailRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>UnControlled Field</h1>
                <input type="email" ref={emailRef} name="email" placeholder="email" />
                <br />
                <input type="password" name="password" placeholder="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UnControlledField;