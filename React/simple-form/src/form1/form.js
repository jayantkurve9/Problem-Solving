import { useState } from "react";
import Fields from "./fields";

function Form() {
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmit(true);
    };

    return (
        <div>
            <h1>Form 1</h1>
            <form id="test" onSubmit={handleSubmit}>
                <Fields submit={submit} />
                <button form="test" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
