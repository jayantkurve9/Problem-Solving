import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
    const [balance, setBalance] = useState(100);
    const [diceBet, setDiceBet] = useState({});
    const [timer, setTimer] = useState(10);
    const [visibleTimer, setVisibleTimer] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [shuffleImage, setShuffleImage] = useState(false);
    const [randomNumber, setRandomNumber] = useState(null);
    const [result, setResult] = useState(0);
    const intervalRef = useRef(null);
    const diceFaces = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        if (disableButton) {
            calculateResult();
        }
    }, [disableButton]);

    useEffect(() => {
        if (!shuffleImage) {
            handleSetResult();
        }
    }, [shuffleImage]);

    const handleImageClick = (face) => {
        // start timer as soon as any one of the image clicks
        if (!intervalRef.current) {
            setVisibleTimer(true);
            intervalRef.current = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer > 0) {
                        return prevTimer - 1;
                    } else {
                        setDisableButton(true);
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                        setVisibleTimer(false);
                        return 10;
                    }
                });
            }, 1000);
        }

        const diceKeyName = "dice" + face;
        const diceBetData = {
            ...diceBet,
            [diceKeyName]: (diceBet[diceKeyName] || 0) + 1,
        };
        setDiceBet(diceBetData);
    };

    const calculateResult = () => {
        setShuffleImage(true);
        const interval = setInterval(() => {
            generateRandomNumber();
        }, 75);

        setTimeout(() => {
            setShuffleImage(false);
            clearInterval(interval);
            displayResult();
        }, 2000);
    };

    const generateRandomNumber = () => {
        setRandomNumber(Math.floor(Math.random() * 6) + 1);
    };

    const getRandomFace = (randomNumber, face) => {
        return diceFaces[Math.abs(randomNumber - face)];
    };

    const displayResult = () => {
        setTimeout(() => {
            setDisableButton(false);
            setDiceBet({});
        }, 5000);
    };

    const handleSetResult = () => {
        if (randomNumber !== null && Object.keys(diceBet).length !== 0) {
            const value = diceBet[`dice${randomNumber}`];
            console.log("random...", randomNumber);
            console.log("value...", value);
            console.log("diceBet...", diceBet);
            let resultValue;
            if (value) {
                resultValue = value * 2;
                setResult(resultValue);
            } else {
                const res = Object.values(diceBet).reduce(
                    (acc, val) => acc + val,
                    0
                );
                resultValue = -res;
                setResult(resultValue);
            }
            handleSetBalance(resultValue);
        }
    };

    const handleSetBalance = (result) => {
        console.log("Result is...", result);
        setBalance((prevBalance) => prevBalance + result);
    };
    const handleResetClick = () => {
        setBalance(100);
    };
    return (
        <div className="container">
            <p className="balance">
                Balance: <span className="amount">${balance}</span>
            </p>
            <div className="timer-container">
                <div className="timer">{visibleTimer && timer}</div>
            </div>
            <div className="dice-container">
                {diceFaces.map((face, index) => (
                    <div key={index} className="dice-box">
                        <div className="dice-btn-container">
                            <div
                                className={
                                    disableButton &&
                                    !shuffleImage &&
                                    face === randomNumber
                                        ? "winning-face"
                                        : "border-white"
                                }
                            >
                                <button
                                    className={
                                        disableButton
                                            ? "image-button"
                                            : "image-button arrow-pointer"
                                    }
                                    onClick={() => handleImageClick(face)}
                                    disabled={disableButton}
                                >
                                    <img
                                        src={
                                            shuffleImage && randomNumber
                                                ? `images/dice${getRandomFace(
                                                      randomNumber,
                                                      face
                                                  )}.jpg`
                                                : `images/dice${face}.jpg`
                                        }
                                        alt={`dice${face}`}
                                    />
                                </button>
                            </div>
                        </div>
                        <p className="bet">
                            Bet:{" "}
                            <span className="amount">
                                ${diceBet[`dice${face}`] || 0}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
            <div className="result-container">
                <p className={result < 0 ? "result-minus" : "result-plus"}>
                    {disableButton && !shuffleImage
                        ? result < 0
                            ? `You Loose: $${-result}`
                            : `You Won: $${result}`
                        : ""}
                </p>
            </div>
            <div className="button-container">
                <button className="btn-reset" onClick={handleResetClick}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default App;
