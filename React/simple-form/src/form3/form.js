import Fields from "./fields";

function Form() {
    return (
        <div>
            <h1>Form 3</h1>
            <Fields />
            <button form="test" type="submit">
                Submit
            </button>
        </div>
    );
}

export default Form;
