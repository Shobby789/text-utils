import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  // const [alert, setAlert] = useState();
  // const showAlert= (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  // }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      // showAlert("Dark mode has been enabled.", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode has been enabled.", "Success");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      {/* <Alert alert="This is alert!" /> */}

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
