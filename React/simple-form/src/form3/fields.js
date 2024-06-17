import React, { useState } from "react";

const Fields = (props) => {
    const [data, setData] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
    };

    return (
        <form id="test" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}
            />
            <label>Password:</label>
            <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
        </form>
    );
};

export default Fields;
