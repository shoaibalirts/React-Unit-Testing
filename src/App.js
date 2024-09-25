import "./App.css";
import Greeting from "./components/Greeting.js";
import EmailValidator from "./components/EmailValidator.js";
function App() {
  return (
    <div className="App">
      <EmailValidator />
      {/* <Greeting /> */}
    </div>
  );
}

export default App;
