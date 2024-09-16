import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditUsers, Users } from "./pages";
import { Header } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/edit" element={<EditUsers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
