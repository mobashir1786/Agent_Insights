import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Test from "./components/test/Test";
import Result from "./components/result/Result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
