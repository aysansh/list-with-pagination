import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/template/Layout";
import Table from "./components/tableComponents/Table";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Table/></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
