import { useState } from "react";
import App from "./App";

function TreeNode({ label, data }) {
	const [isOpen, setIsOpen] = useState(false);
  
	const handleClick = () => {
	  setIsOpen(!isOpen);
	};
  
	return (
		<li>
			<div onClick={handleClick} style={{ cursor: 'pointer' }}>
				{label}
			</div>
			{isOpen && (
				<ul style={{ marginLeft: '20px' }}>
					<App data={data} />
				</ul>
			)}
		</li>
	);
  }

  export default TreeNode;