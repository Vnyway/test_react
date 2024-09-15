import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditUsers, Users } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/edit" element={<EditUsers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
