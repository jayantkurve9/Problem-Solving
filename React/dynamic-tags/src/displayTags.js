import React from "react";

const DisplayTags = ({ tag, message }) => {
    const Tag = tag;
    return <Tag>{message}</Tag>;
    // return React.createElement(tag, null, message);
};

export default DisplayTags;
