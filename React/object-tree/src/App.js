import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TreeNode from "./treeNode";

function App({ data }) {	
    if (typeof data !== "object") {
        return <li>{data}</li>;
    }

    return (
		<>
			{Object.keys(data).map((key) => (
				<TreeNode key={key} label={key} data={data[key]} />
			))}
    	</>
    );
}

export default App;
