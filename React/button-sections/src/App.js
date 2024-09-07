import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [flag, setFlag] = useState({
        btn1: true,
        btn2: false,
        btn3: false,
    });
    return (
        <div className="App">
            <div className="btn-section">
                <button
                    onClick={() =>
                        setFlag({ btn1: true, btn2: false, btn3: false })
                    }
                >
                    Button1
                </button>
                <button
                    onClick={() =>
                        setFlag({ btn1: false, btn2: true, btn3: false })
                    }
                >
                    Button2
                </button>
                <button
                    onClick={() =>
                        setFlag({ btn1: false, btn2: false, btn3: true })
                    }
                >
                    Button3
                </button>
            </div>
            <div className="main-section">
                {flag.btn1 && (
                    <div className="btn1-section">Button 1 Section</div>
                )}
                {flag.btn2 && (
                    <div className="btn2-section">Button 2 Section</div>
                )}
                {flag.btn3 && (
                    <div className="btn3-section">Button 3 Section</div>
                )}
            </div>
        </div>
    );
}

export default App;
