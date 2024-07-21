import "./App.css";
import DisplayTags from "./displayTags";

function App() {
    const tag = "h1";
    const message = "Hello";
    return <DisplayTags tag={tag} message={message} />;
}

export default App;
