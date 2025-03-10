import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      {/* Without Props, so defaultProps will be used */}
      <Navbar title =  "Title" aboutText = "aboutText"/>
      <div className="container my-3">
        
      <TextForm heading = "Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
