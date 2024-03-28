import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard"; // Assuming PascalCase for components
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>  
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Dashboard />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
