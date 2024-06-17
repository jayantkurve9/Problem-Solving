import React, { useEffect, useState } from "react";

const Fields = ({ submit }) => {
    const [data, setData] = useState({});
    let temp;
    const handleChange = (event) => {
        const { name, value } = event.target;
        clearTimeout(temp);
        temp = setTimeout(() => {
            setData({ ...data, [name]: value });
        }, 500);
    };

    useEffect(() => {
        if (submit) {
            console.log(data);
        }
    }, [submit]);

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

export default Fields;
