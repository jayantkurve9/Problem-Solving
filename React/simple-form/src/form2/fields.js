import React, { forwardRef, useImperativeHandle, useState } from "react";

const Fields = (props, ref) => {
    const [data, setData] = useState({});
    let temp;
    const handleChange = (event) => {
        const { name, value } = event.target;
        clearTimeout(temp);
        temp = setTimeout(() => {
            setData({ ...data, [name]: value });
        }, 500);
    };

    useImperativeHandle(ref, () => ({
        onSubmit: () => {
            console.log(data);
        },
    }));

    return (
        <div>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
};

export default forwardRef(Fields);
