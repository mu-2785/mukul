import Content from "./components/Content";
// "App.css"file contains all the css used in the App
import "./App.css";

function App() {
  return (
    <div className="m_appwrapper">
      {/* content is the main content of the TODO web app */}
      <Content />                                       
    </div>
  );
}
export default App;
