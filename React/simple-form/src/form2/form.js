import { useRef } from "react";
import Fields from "./fields";

function Form() {
    const childRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        childRef.current.onSubmit();
    };

    return (
        <div>
            <h1>Form 2</h1>
            <form id="test" onSubmit={handleSubmit}>
                <Fields ref={childRef} />
                <button form="test" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
