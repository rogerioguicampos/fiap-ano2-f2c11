import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NormalizeStyles } from "./shared/NormalizeStyles"
import { Home } from "./screens/Home";
import { About } from "./screens/AboutMe";
import { Educ } from "./screens/Education";
import { EmplHist } from "./screens/EmploymentHist";
import { Hobbies } from "./screens/Hobbies";
import { NotFound } from "./screens/NotFound";

export function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/education" element={<Educ />} />
          <Route path="/employmenthist" element={<EmplHist />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
