import NavBar from "./components/NavBar";
import TodoTable from "./components/TodoTable";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import New from "./pages/New";
import EditTodo from "./pages/EditTodo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edittodo/:id" element={<EditTodo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
