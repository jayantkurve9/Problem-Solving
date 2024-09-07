import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import cn from "classnames";

function App() {
    const [flag, setFlag] = useState({
        red: true,
        yellow: false,
        green: false,
    });

    const [timerValue, setTimerValue] = useState(10);

    useEffect(() => {
        handleSignalChange();
    }, []);

    const handleSignalChange = () => {
        let count = 0;
        setInterval(() => {
            if (count === 0) {
                setFlag((prevFlag) => ({
                    ...prevFlag,
                    yellow: false,
                    red: true,
                }));
                setTimerValue(10);
            }

            if (count === 10) {
                setFlag((prevFlag) => ({
                    ...prevFlag,
                    red: false,
                    green: true,
                }));
                setTimerValue(10);
            }

            if (count === 20) {
                setFlag((prevFlag) => ({
                    ...prevFlag,
                    green: false,
                    yellow: true,
                }));
                setTimerValue(3);
            }

            count++;
            if (count > 0 && count <= 10) {
                setTimerValue(11 - count);
            } else if (count > 10 && count <= 20) {
                setTimerValue(21 - count);
            } else if (count > 20) {
                setTimerValue(24 - count);
                if (count === 23) {
                    count = 0;
                }
            }
        }, 1000);
    };

    return (
        <div className="App">
            <h2 className="signal-title">Signal Module</h2>
            <div className="signal-body">
                <div
                    className={cn("signal-shell bg-lt-red", {
                        "bg-dr-red": flag.red,
                    })}
                />
                <div
                    className={cn("signal-shell bg-lt-yellow", {
                        "bg-dr-yellow": flag.yellow,
                    })}
                />
                <div
                    className={cn("signal-shell bg-lt-green", {
                        "bg-dr-green": flag.green,
                    })}
                />
            </div>
            <p
                className={cn(`signal-timer`, {
                    "timer-red": flag.red,
                    "timer-yellow": flag.yellow,
                    "timer-green": flag.green,
                })}
            >
                00:{timerValue === 10 ? timerValue : `0${timerValue}`}
            </p>
        </div>
    );
}

export default App;
