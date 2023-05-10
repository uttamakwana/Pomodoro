import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StateProvider from "./StateProvider";

function App() {
  return (
    <div className="App">
      {/* First Home Page where all the navigation lies */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
