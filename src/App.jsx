import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Layout from "./components/Layout";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
