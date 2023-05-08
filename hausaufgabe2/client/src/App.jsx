import NavBar from "./components/NavBar";
import TodoTable from "./components/TodoTable";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import New from "./pages/New";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
